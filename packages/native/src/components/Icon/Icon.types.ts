import { ICONS } from "./Icon";

export type IconKeys = keyof typeof ICONS;

export type IconSizes = 1 | 2 | 3;

export interface IconProps extends IconStylesProps {
    name: IconKeys;
    color?: string;
    className?: string;
}

export interface IconStylesProps {
    size: IconSizes;
}