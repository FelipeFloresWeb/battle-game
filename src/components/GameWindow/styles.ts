import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const GameWindowContainer = styled(Flex)`
  width: 80vw;
  height: 60vh;
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  border: 1px solid black;
  margin: 0 auto;
  flex-direction: column;
  z-index: 0;
  /* cursor: url(https://ani.cursors-4u.net/cursors/cur-13/cur1165.ani),
    url(https://ani.cursors-4u.net/cursors/cur-13/cur1165.png), auto; */
`;

export const TrainerContainer = styled(Flex)`
  background-color: ${(props) => props.theme.secondary};
  padding: 0;
  margin: 10px;

  width: 10vw;
  height: 10vh;
  :hover {
    /* Start https://www.cursors-4u.com */

    /* cursor: url(https://cdn-icons-png.flaticon.com/128/2466/2466937.png), auto !important; */
    cursor: url(${(props) => props.imageString}), auto !important;
  }
`;
