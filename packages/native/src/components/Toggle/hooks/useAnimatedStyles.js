import { useAnimatedStyle, withTiming, } from "react-native-reanimated";
import { useTheme } from "styled-components/native";
import { ThumbSizes } from "../Sizes";
export const useAnimatedStyles = ({ isActive, size, }) => {
    const theme = useTheme();
    const { raw } = ThumbSizes(theme)[size];
    const thumbAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            { translateX: withTiming(isActive ? raw.width : 0, { duration: 300 }) },
        ],
    }), [isActive, size, theme]);
    const trackAnimatedStyles = useAnimatedStyle(() => ({
        backgroundColor: withTiming(isActive
            ? theme.colors.components.toggle.track.background.active
            : theme.colors.components.toggle.track.background.inactive, { duration: 300 }),
    }), [isActive, theme]);
    return { thumbAnimatedStyles, trackAnimatedStyles };
};
