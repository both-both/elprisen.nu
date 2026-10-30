import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";

export const InputStyled = styled.input`
  outline: none;
  width: 80vw;
  background-color: ${theme.color.palette.background};
  color: ${theme.color.palette.light};
  padding: 6px 10px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
