import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const MapTabBarWrapper = styled.View`
    height: 60px;
    width: 60px;
    background-color: ${(props) => props.theme.colors.ui.primary};
    border-radius: 40px;
    justify-content: center;
    align-items: center;
`;

export const MapTabIcon = styled(MaterialIcons)`
    margin-top: -10px;
`;
