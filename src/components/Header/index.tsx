import { Image, useColorMode } from "@chakra-ui/react";
import { ToggleTheme } from "../ToggleTheme";
import * as S from "./styles";

export const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <S.HeaderContainer>
      <Image
        draggable={false}
        borderRadius={10}
        src={colorMode === "dark" ? "whiteBanner.png" : "banner.png"}
        alt="sword"
        w="250px"
      />
      <ToggleTheme />
    </S.HeaderContainer>
  );
};
