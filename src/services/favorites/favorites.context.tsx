import React, { createContext, useState } from "react";
import { RestaurantMockProps } from "../../utils/types";

interface FavoritesContextProps {
    favorites?: RestaurantMockProps[] | [];
    addToFavorites: (rest: RestaurantMockProps) => any;
    remvoFromFavorites: (rest: RestaurantMockProps) => any;
}

// @ts-ignore
export const FavoritesContext = createContext<FavoritesContextProps>({});

interface FavoritesContextProviderProps {
    children: React.ReactNode;
}

export const FavoritesContextProvider: React.FC<FavoritesContextProviderProps> = ({
    children,
}) => {
    const [favorites, setFavorites] = useState<RestaurantMockProps[]>([]);

    const add = (restaurant: RestaurantMockProps) => {
        setFavorites([...favorites, restaurant]);
    };

    const remove = (restaurant: RestaurantMockProps) => {
        const newFavorites = favorites.filter(
            (x: RestaurantMockProps) => x.placeId !== restaurant.placeId
        );
        setFavorites(newFavorites);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites: add,
                remvoFromFavorites: remove,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
