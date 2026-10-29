import styled from "styled-components";
import { theme } from "../../../styles/Theme.styled";

export const ContentWrapperStyled = styled.section`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  h2 {
    font-size: ${theme.fontSize.l};
    text-transform: uppercase;
  }
`;
