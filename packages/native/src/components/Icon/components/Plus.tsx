import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";

const Plus = ({ color, strokeWidth }: TSvg) => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M12 5v14m-7-7h14"
      />
    </Svg>
  );
};

export default Plus;
