import { Button, Flex, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(Flex)`
	width: 100%;
	height: 100%;
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

	span:first-of-type {
		color: #ab3434;
	}

	span:last-of-type {
		color: #fff70b;
	}
`

export const InsuficientDiamondsText = styled(Text)`
	font-size: 25px;
	font-weight: 500;
	color: #ab3434;
`

export const RestartButton = styled(Button)`
	display: flex;
	flex-direction: column;
	background-color: #d9a90f;
	box-shadow: 0.1em 0.1em 0.2em black;
	transition: all 0.2s ease;
	width: 120px;
	height: 60px;

	:hover {
		background-color: #d9a90f;

		-webkit-animation: pulseBUtton 1s ease infinite;
		-moz-animation: pulseBUtton 1s ease infinite;
		animation: pulseBUtton 1s ease infinite;
	}

	@-webkit-keyframes pulseBUtton {
		0% {
		}
		50% {
			width: 150px;
			height: 70px;
			font-size: 20px;
			margin-top: 10px;
		}
		100% {
		}
	}
	@-moz-keyframes pulseBUtton {
		0% {
		}
		50% {
			width: 150px;
			height: 70px;
			font-size: 20px;
			margin-top: 10px;
		}
		100% {
		}
	}
	@keyframes pulseBUtton {
		0% {
		}
		50% {
			width: 150px;
			height: 70px;
			font-size: 20px;
			margin-top: 10px;
		}
		100% {
		}
	}
`

export const TimerText = styled(Text)`
	font-size: 25px;
	font-weight: 500;
	color: #fff70b;
`
