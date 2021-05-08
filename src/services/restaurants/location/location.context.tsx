import React, {
    useState,
    useContext,
    useEffect,
    useMemo,
    createContext,
} from "react";
import { locationRequest, locationTransform } from "./location.service";

interface ResultProps {
    lat?: number | 0;
    lng?: number | 0;
}

interface ContextProps {
    location: ResultProps | null;
    isLoading: boolean;
    error: string | undefined | null;
    search: (value: string) => any;
    keyword: string;
}

export const LocationContext = createContext<ContextProps>({
    location: {
        lat: 37.7749295,
        lng: -122.4194155,
    },
    isLoading: false,
    error: "",
    search: () => {},
    keyword: "",
});

interface RestaurantContextProviderProps {
    children: React.ReactNode;
}

export const LocationContextProvider: React.FC<RestaurantContextProviderProps> = ({
    children,
}) => {
    const [keyword, setKeyword] = useState("San Francisco");
    const [location, setLocation] = useState<ResultProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const onSearch = (searchKeyword: string) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    useEffect(() => {
        if (!keyword.length) {
            return;
        }

        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setError("");
                setLocation(result);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
                setLocation(null);
            });
    }, [keyword]);

    useEffect(() => {
        onSearch(keyword);
    }, []);

    return (
        <LocationContext.Provider
            value={{
                location,
                isLoading,
                error,
                // @ts-ignore
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
