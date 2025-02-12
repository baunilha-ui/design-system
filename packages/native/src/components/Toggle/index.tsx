import React, { useEffect, useState } from "react";
import { Thumb, Track } from "./styles";
import { ToggleSizes } from "./types";
import { useAnimatedStyles } from "./hooks/useAnimatedStyles";
import { Pressable } from "react-native";
import { isDefined } from "../../utils/isDefined";

export interface ToggleProps {
  size?: ToggleSizes;
  onChange?: (value: boolean) => void;
  value?: boolean;
}

export const Toggle = ({ size = "sm", onChange, value }: ToggleProps) => {
  const [isActive, setIsActive] = useState(value ?? false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
    onChange?.(!isActive);
  };

  useEffect(() => {
    if (isDefined(value) && isActive !== value) setIsActive(value);
  }, [value]);

  const { thumbAnimatedStyles, trackAnimatedStyles } = useAnimatedStyles({
    isActive,
    size,
  });

  return (
    <Pressable onPress={handleToggleActive}>
      <Track isActive={isActive} size={size} style={trackAnimatedStyles}>
        <Thumb isActive={isActive} size={size} style={thumbAnimatedStyles} />
      </Track>
    </Pressable>
  );
};
