import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MAX_WIDTH } from "../../utils/constants";

export const UiContainer = styled(Flex)`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  height: 100px;
  max-height: 300px;
  margin: 0 auto;
`;

export const UiBar = styled(Flex)`
  width: 250px;
`;
