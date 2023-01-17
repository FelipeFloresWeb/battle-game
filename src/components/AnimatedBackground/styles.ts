import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const AnimatedBackgroundContainer = styled(Flex)`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;

	background: ${props =>
		props.montertype === 'Divine'
			? 'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'
			: 'linear-gradient(45deg, #d58610, #e4e017)'};

	background-size: ${props => props.montertype === 'Divine' && '600% 600%'};
	transition: all 0.1s ease;

	-webkit-animation: ${props => props.montertype === 'Divine' && 'animatedBackgroundDivineColor 10s ease infinite'};
	-moz-animation: ${props => props.montertype === 'Divine' && 'animatedBackgroundDivineColor 10s ease infinite'};
	animation: ${props => props.montertype === 'Divine' && 'animatedBackgroundDivineColor 10s ease infinite'};

	@-webkit-keyframes animatedBackgroundDivineColor {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 51%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@-moz-keyframes animatedBackgroundDivineColor {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 51%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes animatedBackgroundDivineColor {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 51%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
`
