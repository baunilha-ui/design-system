import { LineHeightInPixels, LineHeightRaw } from "../../constants/theme";
import { mapRawValuesToPixel } from "../utils/mapRawToPixel";

export const createLineHeightInPixel = (
  lineHeightRaw: LineHeightRaw
): LineHeightInPixels => {
  return mapRawValuesToPixel(lineHeightRaw);
};
