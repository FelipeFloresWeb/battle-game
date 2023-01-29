import { Flex, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(Flex)`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 1;
`

export const TextContainer = styled(Flex)`
	flex-direction: column;
	position: absolute;
	align-items: center;
	top: calc(50% - 250px);
	left: 50%;
	transform: translate(-50%, -50%);

	text-shadow: 0.1em 0.1em 0.2em black;
	color: #ffffff;
`

export const DeadText = styled(Text)`
	font-size: 50px;
	font-weight: bold;
	color: #ab3434;
`
export const MonsterDataText = styled(Text)`
	font-size: 25px;
	font-weight: 500;

	span {
		color: ${props => props.montertypecolor};
	}
`

export const PlayerLooseText = styled(Text)`
	font-size: 25px;
	font-weight: 500;

	span {
		color: #ab3434;
	}
`
