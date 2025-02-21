import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";
const CheckFill = ({ color, strokeWidth }: TSvg) => {
  return (
    <Svg width={"100%"} height={"100%"} viewBox="0 0 24 24" fill="none">
      <Path
        fill={color}
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m6.25 10 2.5 2.5 5-5"
      />
    </Svg>
  );
};
export default CheckFill;
