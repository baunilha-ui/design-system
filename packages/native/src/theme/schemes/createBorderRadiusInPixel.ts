import { BorderRadiusInPixels, BorderRadiusRaw } from "../../constants/theme";
import { mapRawValuesToPixel } from "../utils/mapRawToPixel";

export const createBorderRadiusInPixel = (
  borderRadiusRaw: BorderRadiusRaw
): BorderRadiusInPixels => {
  return mapRawValuesToPixel(borderRadiusRaw);
};
