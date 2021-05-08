import React from "react";
// prettier-ignore
import { HeaderAvatar, HeaderMenu, HeaderTitle, HeaderWrapper} from "./Header.styles";
import { Avatar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

const Header: React.FC = ({}) => {
    return (
        <HeaderWrapper>
            {/* <HeaderMenu>
                <Feather name="menu" size={30} color="black" />
            </HeaderMenu> */}
            <HeaderTitle>Feasty</HeaderTitle>
            {/* <HeaderAvatar>
                <Avatar.Icon size={30} icon="folder" />
            </HeaderAvatar> */}
        </HeaderWrapper>
    );
};
export default Header;
