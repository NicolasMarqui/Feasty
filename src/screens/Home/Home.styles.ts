import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Subheading } from "react-native-paper";
import { Headline } from "react-native-paper";

export const HomeWrapper = styled.View`
    flex: 1;
    padding: 0 25px;
`;

export const HomeSearchWrapper = styled.View`
    margin: 15px 0;
`;

export const HomeSearch = styled(Searchbar)`
    border-radius: 12px;
    font-size: 14px;
    color: #c0c0c0;
`;

export const HomeTitleWrapper = styled.View`
    margin: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const HomeTitleInfo = styled.View``;

export const HomeTitleMapWrapper = styled.TouchableOpacity``;

export const HomeCurrent = styled(Subheading)`
    color: ${(props) => props.theme.colors.ui.primary};
    margin-top: -10px;
`;

export const HomeTitle = styled(Headline)`
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const HomeRestaurantList = styled.FlatList`
    flex: 1;
`;
