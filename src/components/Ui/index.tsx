import { Image } from "@chakra-ui/react";
import * as S from "./styles";

export const Ui = () => {
  return (
    <S.UiContainer w="100%" justifyContent="space-between" direction="row">
      <S.UiBar>
        <Image
          boxSize="fit-content"
          margin="0 10px"
          objectFit="cover"
          src="images/ui/HP_BAR.png"
          alt="HP_BAR"
        />
      </S.UiBar>
      <S.UiBar>
        <Image
          boxSize="fit-content"
          margin="0 10px"
          objectFit="cover"
          src="images/ui/EXP_BAR.png"
          alt="HP_BAR"
        />
      </S.UiBar>
      <S.UiBar>
        <Image
          boxSize="fit-content"
          margin="0 10px"
          objectFit="cover"
          src="images/ui/GOLD_BAR.png"
          alt="HP_BAR"
        />
      </S.UiBar>
      <S.UiBar>
        <Image
          boxSize="fit-content"
          margin="0 10px"
          objectFit="cover"
          src="images/ui/DIAMOND_BAR.png"
          alt="HP_BAR"
        />
      </S.UiBar>
    </S.UiContainer>
  );
};
