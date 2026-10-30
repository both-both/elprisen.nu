import { HeaderInner, HeaderStyled } from "./Header.styled";

import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderInner>
        <NavBar />
      </HeaderInner>
    </HeaderStyled>
  );
};
