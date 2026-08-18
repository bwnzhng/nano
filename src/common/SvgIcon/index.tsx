import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, style }: SvgIconProps) => (
  <img
    src={`${process.env.PUBLIC_URL}/img/svg/${src}`}
    alt={src}
    width={width}
    height={height}
    style={{ borderRadius: 24, overflow: "hidden", ...style }}
  />
);
