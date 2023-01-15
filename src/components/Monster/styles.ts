import { Flex, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const MonsterContainer = styled(Flex)`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;

  animation: ${(props) =>
      props.monsterattacking === "true" &&
      "monsterAttackAnimator .5s forwards;"}idleAnimator
    1s infinite;

  @keyframes idleAnimator {
    0% {
      top: 50%;
    }
    50% {
      top: 56%;
    }
    100% {
      top: 50%;
    }
  }

  @keyframes monsterAttackAnimator {
    0% {
      top: 50%;
      transform: scale(1) translate(-50%, -50%);
    }
    50% {
      transform: scale(4) translate(-20%, -20%);
    }
    100% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
`;

export const MonsterImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${(props) => (props.isattacking === "true" ? 0.5 : 1)};
`;
