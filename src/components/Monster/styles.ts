import { Flex, Image, Progress, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const MonsterContainer = styled(Flex)`
  flex-direction: column;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease;
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
  transition: all 0.1s ease;
`;

export const HealthContainer = styled(Flex)`
  width: 200px;
  justify-content: center;
  flex-direction: column;
`;

export const HealthProgressBar = styled(Progress)`
  left: 43px;
  height: 15px;
  width: 115px;
  top: 19px;

  div {
    background-color: #0d8f17eb;
  }
`;

export const HealthText = styled(Text)`
  position: relative;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
`;

export const NameText = styled(Text)`
  position: relative;
  top: 20px;
  font-size: 22px;
  font-weight: 700;
  color: #8216e5;
  text-shadow: 2px 2px 0px #ffffff;
`;
