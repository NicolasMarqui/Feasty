import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

import Home from "../screens/Home";
import MapTabBar from "../components/MapTabBar";

const Apptab = createBottomTabNavigator();

const TabRoutes = ({}) => {
    return (
        <Apptab.Navigator
            tabBarOptions={{
                activeTintColor: "#5A5A5A",
                inactiveTintColor: "#4E4E4E",
                labelPosition: "below-icon",
                style: {
                    paddingBottom: 10,
                    paddingHorizontal: 12,
                    height: 60,
                    backgroundColor: "#fff",
                },
            }}
        >
            <Apptab.Screen
                name="Restaurants"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="restaurant"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="Checkout"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="local-grocery-store"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="Map"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MapTabBar size={size} color={color} />
                    ),
                }}
            />

            <Apptab.Screen
                name="Favorites"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="favorite"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />

            <Apptab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            name="person"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Apptab.Navigator>
    );
};

export default TabRoutes;
