import React, {
    useState,
    useContext,
    useEffect,
    useMemo,
    createContext,
} from "react";
import { locationRequest, locationTransform } from "./location.service";

interface ResultProps {
    lat: number;
    lng: number;
}

interface ContextProps {
    location: ResultProps;
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
    const [location, setLocation] = useState<ResultProps>({
        lat: 37.7749295,
        lng: -122.4194155,
    });
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
                setLocation(result);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
                console.log("Error location");
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
