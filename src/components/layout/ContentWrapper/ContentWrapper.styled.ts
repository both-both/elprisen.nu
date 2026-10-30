import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";

export const ContentWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin: auto;

  h2 {
    font-size: ${theme.fontSize.l};
    text-transform: uppercase;
    font-weight: 300;
    margin: 40px 0;
  }
`;
