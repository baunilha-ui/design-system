import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";
const ChevronDown = ({ color, strokeWidth }: TSvg) => {
  return (
    <Svg width={"100%"} height={"100%"} viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m6 9 6 6 6-6"
      />
    </Svg>
  );
};

export default ChevronDown;
