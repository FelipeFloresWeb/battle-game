import { Flex, Image, Progress, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

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

	animation: ${props =>
			props.monsterattacking === 'true' && props.isdead === 'false' && 'monsterAttackAnimator .5s forwards;'}${props =>
			props.isdead === 'false' && 'idleAnimator 1s infinite;'} ${props => props.isdead === 'true' && 'monsterDyingAnimator 3s forwards'};

	-webkit-animation: ${props =>
			props.monsterattacking === 'true' && props.isdead === 'false' && 'monsterAttackAnimator .5s forwards;'}${props =>
			props.isdead === 'false' && 'idleAnimator 1s infinite;'} ${props => props.isdead === 'true' && 'monsterDyingAnimator 3s forwards'};

	-moz-animation: ${props =>
			props.monsterattacking === 'true' && props.isdead === 'false' && 'monsterAttackAnimator .5s forwards;'}${props =>
			props.isdead === 'false' && 'idleAnimator 1s infinite;'} ${props => props.isdead === 'true' && 'monsterDyingAnimator 3s forwards'};

	@-webkit-keyframes idleAnimator {
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

	@-webkit-keyframes monsterAttackAnimator {
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

	@-webkit-keyframes monsterDyingAnimator {
		0% {
			top: 50%;
		}
		50% {
			top: 20%;
		}
		100% {
			top: -50%;
		}
	}

	@-moz-keyframes idleAnimator {
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

	@-moz-keyframes monsterAttackAnimator {
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

	@-moz-keyframes monsterDyingAnimator {
		0% {
			top: 50%;
		}
		50% {
			top: 20%;
		}
		100% {
			top: -50%;
		}
	}

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

	@keyframes monsterDyingAnimator {
		0% {
			top: 50%;
		}
		50% {
			top: 20%;
		}
		100% {
			top: -50%;
		}
	}
`

export const MonsterImage = styled(Image)`
	width: 100%;
	height: 100%;
	object-fit: contain;
	opacity: ${props => (props.isattacking === 'true' || props.isdead === 'true' ? 0.7 : 1)};
	transition: all 0.1s ease;
`

export const HealthContainer = styled(Flex)`
	width: 200px;
	justify-content: center;
	flex-direction: column;
`

export const HealthProgressBar = styled(Progress)`
	left: 43px;
	height: 15px;
	width: 115px;
	top: 19px;

	div {
		background-color: ${props => props.barcolor};
		background: ${props =>
			props.montertype === 'Divine' &&
			'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'};

		background-size: ${props => props.montertype === 'Divine' && '350% 350%'};
		transition: all 0.1s ease;

		-webkit-animation: ${props => props.montertype === 'Divine' && 'animatedBackgroundDivineColor 2s ease infinite'};
		-moz-animation: ${props => props.montertype === 'Divine' && 'animatedBackgroundDivineColor 2s ease infinite'};
		animation: ${props => props.montertype === 'Divine' && 'animatedBackgroundDivineColor 2s ease infinite'};

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
	}
`

export const HealthText = styled(Text)`
	position: relative;
	font-size: 14px;
	font-weight: 600;
	color: #fff;
	width: 100%;
`

export const NameText = styled(Text)`
	position: relative;
	top: 20px;
	font-size: 22px;
	font-weight: 700;
	color: ${props => props.namecolor};

	background: ${props =>
		props.montertype === 'Divine' &&
		'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'};
	background-size: ${props => props.montertype === 'Divine' && '350% 350%'};

	-webkit-background-clip: ${props => props.montertype === 'Divine' && 'text'};
	-webkit-text-fill-color: ${props => props.montertype === 'Divine' && 'transparent'};

	transition: all 0.1s ease;

	-webkit-animation: ${props => props.montertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	-moz-animation: ${props => props.montertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	animation: ${props => props.montertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};

	@-webkit-keyframes animatedColorMythicalColor {
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

	@-moz-keyframes animatedColorMythicalColor {
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

	@keyframes animatedColorMythicalColor {
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

export const MonsterTypeText = styled(Text)`
	position: relative;
	top: 20px;
	font-size: 22px;
	font-weight: 700;
	color: ${props => props.namecolor};
	text-transform: uppercase;

	background: ${props =>
		props.montertype === 'Divine' &&
		'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'};
	background-size: ${props => props.montertype === 'Divine' && '350% 350%'};

	-webkit-background-clip: ${props => props.montertype === 'Divine' && 'text'};
	-webkit-text-fill-color: ${props => props.montertype === 'Divine' && 'transparent'};

	transition: all 0.1s ease;

	-webkit-animation: ${props => props.montertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	-moz-animation: ${props => props.montertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	animation: ${props => props.montertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};

	@-webkit-keyframes animatedColorMythicalColor {
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

	@-moz-keyframes animatedColorMythicalColor {
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

	@keyframes animatedColorMythicalColor {
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
