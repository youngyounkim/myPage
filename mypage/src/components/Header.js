import { useState } from "react";
import { HeaderStyle } from "../styled/header";

function Header() {
  return (
    <HeaderStyle.base>
      <HeaderStyle.contentbox>
        <HeaderStyle.title>Youn Portfolio</HeaderStyle.title>
        <HeaderStyle.icombox>
          <HeaderStyle.link
            href="https://github.com/youngyounkim"
            target="_blank"
          >
            <HeaderStyle.icon src="github.svg"></HeaderStyle.icon>
          </HeaderStyle.link>
          <HeaderStyle.link
            href="https://www.instagram.com/kim_0youn/"
            target="_blank"
          >
            <HeaderStyle.icon src="instar.svg"></HeaderStyle.icon>
          </HeaderStyle.link>
        </HeaderStyle.icombox>
      </HeaderStyle.contentbox>
    </HeaderStyle.base>
  );
}

export default Header;
