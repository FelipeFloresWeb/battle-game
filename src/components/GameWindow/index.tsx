import { Monster } from "../Monster";
import * as S from "./styles";

export const GameWindow = () => {
  const stage = "images/stages/1.webp";

  return (
    <S.GameWindowContainer stage={stage}>
      <Monster />
    </S.GameWindowContainer>
  );
};
