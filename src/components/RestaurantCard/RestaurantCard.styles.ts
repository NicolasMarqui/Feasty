import styled, { css } from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCardWrapper = styled(Card)`
    margin: 10px 0;
    position: relative;
`;

export const RestaurantStarWrapper = styled.View`
    align-items: flex-start;
    margin: 3px 0;
`;

interface RestaurantCardLabelStatusProps {
    isOpen: boolean;
}

export const RestaurantCardLabelWrapper = styled.View<RestaurantCardLabelStatusProps>`
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.ui.primary};

    ${(props) =>
        props.isOpen &&
        css`
            background-color: ${(props) => props.theme.colors.ui.green};
        `}
`;

export const RestaurantCardLabelText = styled.Text`
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
`;

export const RestaurantCardFavoriteWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 20px;
    justify-content: center;
    align-items: center;
`;

export const RestaurantCardInfoWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const RestaurantCardInfo = styled.View``;

export const RestaurantCardType = styled.View``;