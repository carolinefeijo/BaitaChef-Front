import React from "react";
import * as S from "./styles";

import iconMenu from "../../../assets/icons/iconMenu.png";
import logo from "../../../assets/logo.jpg";
import SearchComponent from "../SearchComponent";

export default function NavBar() {
  return (
    <S.Container>
      <S.ContainerRow>
        <S.ButtonMenu>
          <S.IconMenu src={iconMenu} alt="icone menu" />
        </S.ButtonMenu>

        <S.ContainerLogo>
          <a href="/">
            <S.LogoImg src={logo} alt="Logo" />
          </a>

          <S.Title>Baita</S.Title>
          <S.TitleSub>chef</S.TitleSub>
        </S.ContainerLogo>

        <SearchComponent />
      </S.ContainerRow>
    </S.Container>
  );
}
