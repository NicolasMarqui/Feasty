import React from "react";
// prettier-ignore
import { RestaurantCardWrapper, RestaurantStarWrapper, RestaurantCardLabelWrapper, RestaurantCardLabelText, RestaurantCardFavoriteWrapper, RestaurantCardInfoWrapper, RestaurantCardInfo, RestaurantCardType} from "./RestaurantCard.styles";
import { Card, Title, Paragraph } from "react-native-paper";
import { Rating } from "react-native-ratings";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { RestaurantMockProps } from "../../utils/types";

interface RestaurantCardProps {
    restaurant: RestaurantMockProps;
}

const mock = {
    isOpen: true,
    title: "Zuni Café",
    location: "1658 Market Street , San Francisco",
    rating: 2,
    isFavorite: false,
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
    const navigation = useNavigation();
    const { name, rating, vicinity, photos, isOpenNow } = restaurant;

    return (
        <RestaurantCardWrapper
            onPress={() => navigation.navigate("detail", { data: restaurant })}
        >
            {/* @ts-ignore */}
            <Card.Cover source={{ uri: photos[0] }} />

            <RestaurantCardLabelWrapper isOpen={isOpenNow}>
                <RestaurantCardLabelText>
                    {isOpenNow ? "Open" : "Closed"}
                </RestaurantCardLabelText>
            </RestaurantCardLabelWrapper>

            <RestaurantCardFavoriteWrapper>
                {mock.isFavorite ? (
                    <MaterialIcons name="favorite" size={30} color="#F94144" />
                ) : (
                    <MaterialIcons
                        name="favorite-border"
                        size={30}
                        color="#222"
                    />
                )}
            </RestaurantCardFavoriteWrapper>

            <Card.Content>
                <RestaurantStarWrapper>
                    <Rating
                        readonly
                        type="custom"
                        ratingColor="#F9C74F"
                        ratingBackgroundColor="#c8c7c8"
                        ratingCount={5}
                        imageSize={25}
                        onFinishRating={() => {}}
                        style={{ paddingVertical: 10 }}
                        startingValue={rating}
                    />
                </RestaurantStarWrapper>

                <RestaurantCardInfoWrapper>
                    <RestaurantCardInfo>
                        <Title>{name}</Title>
                        <Paragraph>{vicinity}</Paragraph>
                    </RestaurantCardInfo>

                    <RestaurantCardType></RestaurantCardType>
                </RestaurantCardInfoWrapper>
            </Card.Content>
        </RestaurantCardWrapper>
    );
};
export default RestaurantCard;
