import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";
const Check = ({ color, strokeWidth }: TSvg) => {
  return (
    <Svg width={"100%"} height={"100%"} viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M20 6 9 17l-5-5"
      />
    </Svg>
  );
};
export default Check;
