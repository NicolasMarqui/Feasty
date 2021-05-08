import React, { createContext, useState, useEffect } from "react";
import { RestaurantMockProps } from "../../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    const saveFavorites = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@feasty:favorites", jsonValue);
        } catch (e) {
            console.log("Save favorites error");
        }
    };

    const loadFavorites = async () => {
        try {
            const value = await AsyncStorage.getItem("@feasty:favorites");
            if (value !== null) {
                setFavorites(JSON.parse(value));
            }
        } catch (e) {
            console.log("Load favorites error");
        }
    };

    const add = (restaurant: RestaurantMockProps) => {
        setFavorites([...favorites, restaurant]);
    };

    const remove = (restaurant: RestaurantMockProps) => {
        const newFavorites = favorites.filter(
            (x: RestaurantMockProps) => x.placeId !== restaurant.placeId
        );
        setFavorites(newFavorites);
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    useEffect(() => {
        saveFavorites(favorites);
    }, [favorites]);

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
