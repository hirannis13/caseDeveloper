import React, { useState } from "react";
import NavItem from "./NavItem";

export interface INavbar {
  navActive: boolean;
  setNavActive: (value: boolean) => void;
}

const Navbar: React.FC<INavbar> = ({ navActive, setNavActive }) => {
  const [activeIdx, setActiveIdx] = useState(-1);

  const MENU_LIST: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "Store", href: "/store" },
    { text: "Marketplace", href: "/marketplace" },
    { text: "Dexicon", href: "/dexicon" },
  ];

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        ></div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(true);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
