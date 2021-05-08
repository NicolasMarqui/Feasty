import React, { useContext, useEffect, useState } from "react";
import SearchMap from "../../components/SearchMap";
import { LocationContext } from "../../services/restaurants/location/location.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { Map, MapWrapper } from "./Map.styles";
import MapView from "react-native-maps";

const FullMap: React.FC = ({}) => {
    const { location } = useContext(LocationContext);
    const { restaurants = [] } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);

    useEffect(() => {
        if (location?.viewport) {
            const northeastLat = location?.viewport.northeast.lat;
            const southeastLat = location?.viewport.southwest.lat;

            setLatDelta(northeastLat - southeastLat);
        }
    }, [location, location?.viewport]);

    return (
        <MapWrapper>
            <SearchMap />
            <Map
                region={{
                    latitude: location?.lat as any,
                    longitude: location?.lng as any,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants.map((restaurant) => {
                    return null;
                })}
            </Map>
        </MapWrapper>
    );
};
export default FullMap;
