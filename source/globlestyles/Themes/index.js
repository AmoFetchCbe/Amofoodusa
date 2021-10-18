import { DefaultTheme } from "react-native-paper";
import colors from "../../globlestyles/color";
//import { fontProperties } from "../Font";

export const Themes = {

    inputTheme: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme,
            primary: colors.black,
            background: colors.white,
            error: colors.dotColor,
            placeholder: colors.commonIconColor,
        },
    }
}