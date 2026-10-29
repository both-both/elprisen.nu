import { PriceTableStyled } from "./PriceTable.styled";
import type { PriceTableProps } from "./PriceTable.types";

export const PriceTable = ({ children }: PriceTableProps) => {
  return <PriceTableStyled>{children}</PriceTableStyled>;
};
