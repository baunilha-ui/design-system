import React from "react";
import Svg, { Path } from "react-native-svg";
import { TSvg } from "../types/svg";

const UploadCloud2 = ({ color, strokeWidth }: TSvg) => {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="m8 16 4-4m0 0 4 4m-4-4v9m8-4.257A5.5 5.5 0 0 0 16.5 7a.62.62 0 0 1-.534-.302 7.5 7.5 0 1 0-11.78 9.096"
      />
    </Svg>
  );
};

export default UploadCloud2;
