import {
  FontSizeInPixels,
  FontSizeKeys,
  FontSizeRaw,
} from "../../constants/theme";
import { mapRawValuesToPixel } from "../utils/mapRawToPixel";

export const createFontSizeInPixel = (
  fontSizesRaw: FontSizeRaw
): FontSizeInPixels => {
  return mapRawValuesToPixel(fontSizesRaw);
};
