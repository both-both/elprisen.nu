import styled from "styled-components";
import { resetLink, resetList } from "./mixins";
import { theme } from "./Theme.styled";

export const Li = styled.li`
  ${resetList}
  ${resetLink}
  font-size: ${theme.font.primary};
  font-size: ${theme.fontSize.s};
  text-transform: uppercase;
  display: flex;
  gap: 40px;
  color: ${theme.color.palette.light};
`;
export const Ul = styled.ul`
  ${resetList}
`;
