import React, { useState, useContext } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import { Paragraph } from "react-native-paper";
// prettier-ignore
import { HomeWrapper, HomeTitleWrapper, HomeCurrent, HomeTitle, HomeRestaurantList, HomeTitleInfo, HomeTitleMapWrapper } from "./Home.styles";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import Loading from "../../components/Loading";
import Search from "../../components/Search";

const Home: React.FC = ({}) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);

    return (
        <HomeWrapper>
            <Search />

            <HomeTitleWrapper>
                <HomeTitleInfo>
                    <HomeTitle>All restaurants</HomeTitle>
                    <HomeCurrent>in San Francisco</HomeCurrent>
                </HomeTitleInfo>

                <HomeTitleMapWrapper>
                    <Paragraph>See map</Paragraph>
                </HomeTitleMapWrapper>
            </HomeTitleWrapper>

            {isLoading ? (
                <Loading />
            ) : (
                <HomeRestaurantList
                    data={restaurants}
                    renderItem={({ item }) => (
                        // @ts-ignore
                        <RestaurantCard restaurant={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    // @ts-ignore
                    keyExtractor={(item) => item.name}
                />
            )}
        </HomeWrapper>
    );
};
export default Home;
