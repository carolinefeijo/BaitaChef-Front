import React, { useState } from "react";
import * as S from "./styles";

export default function SearchComponent() {
  const [text, setText] = useState("");

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        placeholder="Encontre uma receita.."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <S.SearchButton>
        <S.SearchIcon color="#63AA4A" size={25} />
      </S.SearchButton>
    </S.SearchContainer>
  );
}
