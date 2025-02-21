import { ToggleSizes } from "../types";
type UseAnimatedStylesProps = {
    isActive: boolean;
    size: ToggleSizes;
};
export declare const useAnimatedStyles: ({ isActive, size, }: UseAnimatedStylesProps) => {
    thumbAnimatedStyles: {
        transform: {
            translateX: number;
        }[];
    };
    trackAnimatedStyles: {
        backgroundColor: string;
    };
};
export {};
