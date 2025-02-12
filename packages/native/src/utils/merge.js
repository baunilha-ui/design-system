export const merge = (object, source) => {
    const result = Object.assign({}, object);
    for (const key in source) {
        if (source[key] && typeof source[key] === "object") {
            result[key] = merge(result[key], source[key]);
        }
        else {
            result[key] = source[key];
        }
    }
    return result;
};
