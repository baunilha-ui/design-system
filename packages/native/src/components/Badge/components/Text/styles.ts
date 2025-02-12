import styled from "styled-components/native";
import { BaseText } from "../../../BaseText";
import { BadgeColors } from "../../types";
import { getBadgeColors } from "../../Colors";

export const StyledBadgeText = styled(BaseText)<{ badgeColor: BadgeColors }>`
  color: ${({ badgeColor, theme }) => getBadgeColors(badgeColor, theme).text};
`;
