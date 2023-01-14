import { Image, useColorMode } from "@chakra-ui/react";
import { ToggleTheme } from "../ToggleTheme";
import * as S from "./styles";

export const Header = () => {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <S.HeaderContainer>
      <Image
        borderRadius={10}
        src={colorMode === "dark" ? "whiteBanner.png" : "banner.png"}
        alt="sword"
        w="250px"
      />
      <ToggleTheme />
    </S.HeaderContainer>
  );
};
