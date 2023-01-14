import { Flex } from "@chakra-ui/react";
import * as S from "./styles";

export const GameWindow = () => {
  const stage = "images/stages/1.webp";
  return (
    <S.GameWindowContainer stage={stage}>
      <Flex>Player</Flex>
    </S.GameWindowContainer>
  );
};
