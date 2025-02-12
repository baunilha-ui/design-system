import { mapRawValuesToPixel } from "../utils/mapRawToPixel";
export const createLineHeightInPixel = (lineHeightRaw) => {
    return mapRawValuesToPixel(lineHeightRaw);
};
