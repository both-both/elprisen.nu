import { HeaderInner, HeaderStyled } from "./Header.styled";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderInner>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <NavBar />
      </HeaderInner>
    </HeaderStyled>
  );
};
