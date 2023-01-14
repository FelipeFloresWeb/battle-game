import { useColorMode } from "@chakra-ui/react";

import * as S from "./styles";

export const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return colorMode === "light" ? (
    <S.MoonIcon size={22} onClick={toggleColorMode} />
  ) : (
    <S.SunIcon size={22} onClick={toggleColorMode} />
  );
};
