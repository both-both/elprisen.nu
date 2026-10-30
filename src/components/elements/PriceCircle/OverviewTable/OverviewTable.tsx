import { OverviewTableStyled } from "./OverviewTable.styled";
import type { OverviewTableProps } from "./OverviewTable.types";

export const OverviewTable = ({ children }: OverviewTableProps) => {
  return <OverviewTableStyled>{children}</OverviewTableStyled>;
};
