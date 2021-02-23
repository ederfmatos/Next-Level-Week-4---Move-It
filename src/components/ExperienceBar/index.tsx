import React from "react";

import * as S from "./styles";

export default function ExperienceBar() {
  return (
    <S.Container>
      <S.Label>0 xp</S.Label>
      <S.Indicator>
        <S.CurrentExpirence width="50" label="300px" />
      </S.Indicator>
      <S.Label>600 xp</S.Label>
    </S.Container>
  );
}
