import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup";

const LStack = createStackNavigator();

const LoginStack: React.FC = () => {
    return (
        <LStack.Navigator headerMode="none">
            <LStack.Screen name="login" component={Login} />
            <LStack.Screen name="signup" component={Signup} />
        </LStack.Navigator>
    );
};

export default LoginStack;
