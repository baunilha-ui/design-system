import { mapRawValuesToPixel } from "../utils/mapRawToPixel";
export const createFontSizeInPixel = (fontSizesRaw) => {
    return mapRawValuesToPixel(fontSizesRaw);
};
