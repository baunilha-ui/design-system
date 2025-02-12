import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";

const ArrowLeft = ({ color, strokeWidth }: TSvg) => (
  <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M19 12H5m0 0 7 7m-7-7 7-7"
    />
  </Svg>
);

export default ArrowLeft;
