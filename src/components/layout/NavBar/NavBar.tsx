import { NavLink } from "react-router-dom";
import { NavBarStyled } from "./NavBar.styled";
import { Li, Ul } from "../../../styles/Elements";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Ul>
        <Li>
          <NavLink to="/oversigt">Oversigt</NavLink>
          <NavLink to="/lige-nu">Lige Nu</NavLink>
          <NavLink to="/historik">Historik</NavLink>
        </Li>
      </Ul>
    </NavBarStyled>
  );
};
