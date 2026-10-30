import styled from "styled-components";
import { resetLink } from "../../../styles/mixins";

export const NavBarStyled = styled.nav`
  Ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 40px;
    font-weight: 500;
  }

  a {
    ${resetLink}
  }
  img {
    height: 45px;
    margin: 10px 0;
  }
`;
