import { SpaceInPixels, SpaceRaw } from "../../constants/theme";
import { mapRawValuesToPixel } from "../utils/mapRawToPixel";

export const createSpaceInPixel = (spaceRaw: SpaceRaw): SpaceInPixels => {
  return mapRawValuesToPixel(spaceRaw);
};
