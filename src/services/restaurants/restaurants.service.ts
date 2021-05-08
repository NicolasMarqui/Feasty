import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        const mock = mocks[location];
        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    });
};

export const restaurantTransform = (values: any) => {
    const mappedResults = values.results.map((restaurant: any) => {
        restaurant.photos = restaurant.photos.map((p: any) => {
            return mockImages[
                Math.ceil(Math.random() * (mockImages.length - 1))
            ];
        });

        return {
            ...restaurant,
            isOpenNow:
                restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily:
                restaurant.bussiness_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
