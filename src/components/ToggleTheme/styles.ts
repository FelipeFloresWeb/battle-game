import styled from "@emotion/styled";
import { BiMoon, BiSun } from "react-icons/bi";

export const SunIcon = styled(BiSun)`
  :hover {
    border-radius: 100%;
    color: ${(props) => props.theme.secondary};
  }
`;

export const MoonIcon = styled(BiMoon)`
  :hover {
    border-radius: 100%;
    color: ${(props) => props.theme.secondary};
  }
`;
