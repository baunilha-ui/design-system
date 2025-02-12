import { DeepPartial } from "../types/utils";

export const merge = <T>(object: T, source: DeepPartial<T>): T => {
  const result = { ...object };

  for (const key in source) {
    if (source[key] && typeof source[key] === "object") {
      result[key] = merge(result[key], source[key] as any);
    } else {
      result[key] = source[key] as any;
    }
  }

  return result;
};
