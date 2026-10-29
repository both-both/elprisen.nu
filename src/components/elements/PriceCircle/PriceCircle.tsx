import { PriceCircleStyled } from "./PriceCircle.styled";
import type { CircleProps } from "./PriceCircle.types";

export const PriceCicle = ({ children }: CircleProps) => {
  return <PriceCircleStyled>{children}</PriceCircleStyled>;
};
