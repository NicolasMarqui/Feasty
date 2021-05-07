import React, {
    useState,
    useContext,
    useEffect,
    useMemo,
    createContext,
} from "react";
import { restaurantRequest, restaurantTransform } from "./restaurants.service";

interface ContextProps {
    restaurants: any[];
    isLoading: boolean;
    error: string | undefined | null;
}

export const RestaurantsContext = createContext<ContextProps>({
    restaurants: [],
    isLoading: false,
    error: "",
});

interface RestaurantContextProviderProps {
    children: React.ReactNode;
}

export const RestaurantsContextProvider: React.FC<RestaurantContextProviderProps> = ({
    children,
}) => {
    const [restaurant, setRestaurant] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantRequest()
                .then(restaurantTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurant(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 2000);
    };

    useEffect(() => {
        retrieveRestaurants();
    }, []);

    return (
        <RestaurantsContext.Provider
            value={{ restaurants: restaurant, isLoading, error }}
        >
            {children}
        </RestaurantsContext.Provider>
    );
};
