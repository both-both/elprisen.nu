import styled from "styled-components";
import { resetLink } from "../../../styles/mixins";

export const NavBarStyled = styled.nav`
  display: flex;
  justify-content:;
  flex-direction: column;
  gap: 20px;

  a {
    ${resetLink}
  }
`;
