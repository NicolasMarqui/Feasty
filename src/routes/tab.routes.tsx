import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import StackRoutes from "./stack.routes";

import Home from "../screens/Home";
import MapTabBar from "../components/MapTabBar";
import Checkout from "../screens/Checkout";
import FullMap from "../screens/Map";
import Favorites from "../screens/Favorites";

const Apptab = createBottomTabNavigator();

const TabRoutes = ({}) => {
    return (
        <Apptab.Navigator
            tabBarOptions={{
                activeTintColor: "#5A5A5A",
                inactiveTintColor: "#4E4E4E",
                labelPosition: "below-icon",
                keyboardHidesTabBar: true,
                showLabel: true,
                labelStyle: {
                    color: "#fff",
                },
                style: {
                    paddingHorizontal: 12,
                    paddingBottom: 10,
                    height: 60,
                    backgroundColor: "#222",
                },
            }}
        >
            <Apptab.Screen
                name="Restaurants"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="restaurant"
                            size={size}
                            color="#fff"
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="Checkout"
                component={Checkout}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="local-grocery-store"
                            size={size}
                            color="#fff"
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="Map"
                component={FullMap}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MapTabBar size={size} color={color} />
                    ),
                }}
            />

            <Apptab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="favorite"
                            size={size}
                            color="#fff"
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="person" size={size} color="#fff" />
                    ),
                }}
            />
        </Apptab.Navigator>
    );
};

export default TabRoutes;
