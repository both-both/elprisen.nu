import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";

export const HeaderStyled = styled.header`
  background-color: ${theme.color.palette.background};
  display: flex;
  justify-content: center;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
