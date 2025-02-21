import { BaseIcon, IconProps } from "@/components/BaseIcon";
import { useComponentProps } from "@/providers/ComponentPropsProvider";
import { ButtonChildrenProps } from "../..";

const Icon = ({ name, color, size }: IconProps) => {
  const { textColor } = useComponentProps<ButtonChildrenProps>();
  const iconColor = color || textColor;

  return <BaseIcon name={name} size={size} color={iconColor} />;
};

export default Icon;
