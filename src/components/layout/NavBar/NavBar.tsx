import { Link, NavLink } from "react-router-dom";
import { NavBarStyled } from "./NavBar.styled";
import { Li, Ul } from "../../../styles/Elements";
import logo from "../../../assets/logo.svg";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <Ul>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Li>
          <NavLink to="/oversigt">Oversigt</NavLink>
        </Li>
        <Li>
          <NavLink to="/lige-nu">Lige Nu</NavLink>
        </Li>
        <Li>
          <NavLink to="/historik">Historik</NavLink>
        </Li>
      </Ul>
    </NavBarStyled>
  );
};
