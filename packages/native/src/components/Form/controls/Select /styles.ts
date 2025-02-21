import { BaseText } from "@/components/BaseText";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(View)`
  position: relative;
  width: 100%;
`;

export const Trigger = styled.Pressable`
  width: 100%;
`;

export const Menu = styled(Animated.ScrollView)<{ maxHeight: number }>`
  position: absolute;
  max-height: ${({ maxHeight }) => `${maxHeight}px`};
  border-radius: ${({ theme }) => theme.borderRadius[2]};
  width: 100%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.tertiary};
  background-color: ${({ theme }) => theme.colors.background.primary};

  shadow-color: rgba(16, 24, 40, 1);
  shadow-offset: 0px 12px;
  shadow-opacity: 0.08;
  shadow-radius: 16px;
  elevation: 4;
  z-index: 1;
`;

export const Item = styled.Pressable<{
  isSelected: boolean;
}>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.space[2.5]} ${theme.space[3.5]}`};
  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.colors.background.secondary
      : theme.colors.background.primary};
  gap: ${({ theme }) => theme.space[2]};
  align-self: stretch;
`;

export const Label = styled(BaseText)`
  flex: 1;
`;
