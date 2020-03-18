import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// prettier-ignore
import { HeaderLogo, HeaderMenu, HeaderMenuItem, HeaderMenuSelector, HeaderStyled, HeaderSubMenu, HeaderSubMenuItem } from "./Header.style";

export const HeaderView = () => {
  const { pathname } = useLocation();

  return (
    <HeaderStyled>
      <HeaderMenu>
        <Link to="/">
          <HeaderLogo alt="logo" src="/elements/logo.svg" />
        </Link>
        <HeaderMenuItem to="/1" className="selected">
          I - SHIP FACTORY
        </HeaderMenuItem>
        <HeaderMenuItem to="/11">II - INTO BATTLE</HeaderMenuItem>
        <HeaderMenuItem to="/21">III - MORE SOON...</HeaderMenuItem>
        <HeaderMenuSelector />
      </HeaderMenu>
      <HeaderSubMenu>
        <HeaderSubMenuItem to="/1" className={pathname === "/1" || pathname === "/" ? "selected" : ""}>
          1 - ABOUT
        </HeaderSubMenuItem>
        <HeaderSubMenuItem to="/2" className={pathname === "/2" ? "selected" : ""}>
          2 - TYPES
        </HeaderSubMenuItem>
        <HeaderSubMenuItem to="/3" className={pathname === "/3" ? "selected" : ""}>
          3 - VARIABLES
        </HeaderSubMenuItem>
        <HeaderSubMenuItem to="/4" className={pathname === "/4" ? "selected" : ""}>
          4 - MATH
        </HeaderSubMenuItem>
        <HeaderSubMenuItem to="/5" className={pathname === "/5" ? "selected" : ""}>
          5 - STRINGS
        </HeaderSubMenuItem>
        <HeaderSubMenuItem to="/6" className={pathname === "/6" ? "selected" : ""}>
          6 - FUNCTIONS
        </HeaderSubMenuItem>
        <HeaderSubMenuItem to="7" className={pathname === "/7" ? "selected" : ""}>
          7 - COMING SOON...
        </HeaderSubMenuItem>
      </HeaderSubMenu>
    </HeaderStyled>
  );
};
