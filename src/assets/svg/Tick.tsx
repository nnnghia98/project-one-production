import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#9E7676"}
      d="M14.87 1.524 5.514 11.856a.421.421 0 0 1-.313.144.421.421 0 0 1-.313-.144L.13 6.602A.514.514 0 0 1 0 6.256c0-.13.047-.254.13-.346l.618-.682a.421.421 0 0 1 .314-.144c.117 0 .23.052.313.144l3.821 4.22L13.625.14a.42.42 0 0 1 .627 0l.617.692c.084.092.131.216.131.346 0 .13-.047.255-.13.346Z"
    />
  </svg>
);
export default SvgComponent;
