import React, { useState, useContext } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import { Paragraph } from "react-native-paper";
// prettier-ignore
import { HomeSearch, HomeSearchWrapper, HomeWrapper, HomeTitleWrapper, HomeCurrent, HomeTitle, HomeRestaurantList, HomeTitleInfo, HomeTitleMapWrapper } from "./Home.styles";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { RestaurantMockProps } from "../../utils/types";

const Home: React.FC = ({}) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    console.log(restaurants);
    const [searchQuery, setsearchQuery] = useState<string>("");

    return (
        <HomeWrapper>
            <HomeSearchWrapper>
                <HomeSearch
                    placeholder="Search city"
                    onChangeText={(e) => setsearchQuery(e)}
                    value={searchQuery}
                />
            </HomeSearchWrapper>

            <HomeTitleWrapper>
                <HomeTitleInfo>
                    <HomeTitle>All restaurants</HomeTitle>
                    <HomeCurrent>in San Francisco</HomeCurrent>
                </HomeTitleInfo>

                <HomeTitleMapWrapper>
                    <Paragraph>See map</Paragraph>
                </HomeTitleMapWrapper>
            </HomeTitleWrapper>

            <HomeRestaurantList
                data={restaurants}
                // @ts-ignore
                renderItem={({ item }) => <RestaurantCard restaurant={item} />}
                showsVerticalScrollIndicator={false}
                // @ts-ignore
                keyExtractor={(item) => item.name}
            />
        </HomeWrapper>
    );
};
export default Home;
