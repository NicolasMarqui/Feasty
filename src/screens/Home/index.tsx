import React, { useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import { Paragraph } from "react-native-paper";
// prettier-ignore
import { HomeSearch, HomeSearchWrapper, HomeWrapper, HomeTitleWrapper, HomeCurrent, HomeTitle, HomeRestaurantList, HomeTitleInfo, HomeTitleMapWrapper } from "./Home.styles";

const Home: React.FC = ({}) => {
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
                data={[1, 2, 3]}
                renderItem={({ item }) => <RestaurantCard />}
                showsVerticalScrollIndicator={false}
            />
        </HomeWrapper>
    );
};
export default Home;
