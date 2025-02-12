export const mapRawValuesToPixel = (raw) => {
    return Object.entries(raw).reduce((acc, [key, value]) => {
        return Object.assign(Object.assign({}, acc), { [key]: `${value}px` });
    }, {});
};
