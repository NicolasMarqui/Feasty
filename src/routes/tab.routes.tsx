import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

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
                keyboardHidesTabBar: true,
                showLabel: false,
                labelStyle: {
                    color: "#F94144",
                },
                style: {
                    paddingBottom: 30,
                    paddingTop: 30,
                    paddingHorizontal: 12,
                    backgroundColor: "#222",
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
                            color="#fff"
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
                            color="#fff"
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
