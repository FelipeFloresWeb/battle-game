import { ToggleTheme } from "../ToggleTheme";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <h1>My Logo</h1>
      <ToggleTheme />
    </S.HeaderContainer>
  );
};
