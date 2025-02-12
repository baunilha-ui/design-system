import { useTheme } from "@/providers/ThemeProvider";
import { useCallback, useMemo, useRef, useState } from "react";
import { useWindowDimensions, View } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DEFAULT_MAX_HEIGHT = 320;
export const useAnimatedStyles = (showMenu: boolean) => {
  const [triggerHeight, setTriggerHeight] = useState(0);
  const { bottom: safeBottom } = useSafeAreaInsets();
  const [triggerY, setTriggerY] = useState(0);
  const selectRef = useRef<View>(null);
  const { height: windowHeight } = useWindowDimensions();
  const { theme } = useTheme();

  const menuAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(showMenu ? 1 : 0, { duration: 300 }),
      transform: [
        {
          translateY: withTiming(
            showMenu ? triggerHeight + theme.raw.space[2] : triggerHeight,
            {
              duration: 300,
            }
          ),
        },
      ],
    };
  });

  const handleTriggerLayout = useCallback(() => {
    selectRef.current?.measureInWindow((fx, fy, width, height) => {
      setTriggerY(fy);
      setTriggerHeight(height);
    });
  }, []);

  const menuMaxHeight = useMemo(() => {
    return Math.min(
      windowHeight -
        (triggerY + triggerHeight) -
        theme.raw.space[2] -
        safeBottom,
      DEFAULT_MAX_HEIGHT
    );
  }, [windowHeight, triggerY, triggerHeight]);

  return {
    selectRef,
    menuMaxHeight,
    theme,
    handleTriggerLayout,
    menuAnimatedStyle,
  };
};
