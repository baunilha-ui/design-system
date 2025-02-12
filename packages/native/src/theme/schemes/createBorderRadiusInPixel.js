import { mapRawValuesToPixel } from "../utils/mapRawToPixel";
export const createBorderRadiusInPixel = (borderRadiusRaw) => {
    return mapRawValuesToPixel(borderRadiusRaw);
};
