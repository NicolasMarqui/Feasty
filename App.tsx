import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// prettier-ignore
import { Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold} from "@expo-google-fonts/nunito";
import { Sarina_400Regular } from "@expo-google-fonts/sarina";
import Header from "./src/components/Header";
import Routes from "./src/routes";

export default function App() {
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
        Nunito_800ExtraBold,
        Sarina_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        // @ts-ignore
        <ThemeProvider theme={theme}>
            <StatusBar style="auto" />
            <Header />
            <Routes />
        </ThemeProvider>
    );
}
