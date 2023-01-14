import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const LinksContainer = styled(Flex)`
  width: max-content;
  justify-content: start;
  padding: 80px 30px;
  a {
    font-size: 12px;
    :hover {
      color: ${(props) => props.theme.secondary};
    }
  }
`;
