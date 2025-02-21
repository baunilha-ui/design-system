import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";

const ArrowRight = ({ color, strokeWidth }: TSvg) => (
  <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M5 12h14m0 0-7-7m7 7-7 7"
    />
  </Svg>
);

export default ArrowRight;
