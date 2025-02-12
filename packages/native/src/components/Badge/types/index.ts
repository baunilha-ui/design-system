import { CustomTextProps } from "../../BaseText/types";

export type BadgeVariants = "outline" | "fill";
export type BadgeType = "pill" | "default";
export type BadgeSizes = 1 | 2 | 3;
export type BadgeColors =
  | "gray"
  | "brand"
  | "error"
  | "warning"
  | "success"
  | "grayBlue"
  | "blueLight"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "orange";

export type BadgeChildrenProps = {
  textSize: CustomTextProps["size"];
  color: BadgeColors;
  isOutline: boolean;
};
