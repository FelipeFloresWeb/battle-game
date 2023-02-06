import { Flex, Image, Progress, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { MONSTER_ATTACK_DURATION } from '../../utils/constants'

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
			props.doattack === 'true' && `monsterAttackAnimator ${MONSTER_ATTACK_DURATION / 1000}s forwards;`}${props =>
			props.isdead === 'false' && 'idleAnimator 1s infinite;'} ${props => props.isdead === 'true' && 'monsterDyingAnimator 3s forwards'};

	-webkit-animation: ${props =>
			props.doattack === 'true' && `monsterAttackAnimator ${MONSTER_ATTACK_DURATION / 1000}s forwards;`}${props =>
			props.isdead === 'false' && 'idleAnimator 1s infinite;'} ${props => props.isdead === 'true' && 'monsterDyingAnimator 3s forwards'};

	-moz-animation: ${props =>
			props.doattack === 'true' && `monsterAttackAnimator ${MONSTER_ATTACK_DURATION / 1000}s forwards;`}${props =>
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
			transform: scale(1) translate(-50%, -50%);
		}
		50% {
			transform: scale(3) translate(-18%, -50%);
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
			transform: scale(1) translate(-50%, -50%);
		}
		50% {
			transform: scale(3) translate(-18%, -50%);
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
			transform: scale(1) translate(-50%, -50%);
		}
		50% {
			transform: scale(3) translate(-18%, -50%);
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
	top: 0;

	div {
		background-color: ${props => props.barcolor};
		background: ${props =>
			props.monstertype === 'Divine' &&
			'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'};

		background-size: ${props => props.monstertype === 'Divine' && '350% 350%'};
		transition: all 0.1s ease;

		-webkit-animation: ${props => props.monstertype === 'Divine' && 'animatedBackgroundDivineColor 2s ease infinite'};
		-moz-animation: ${props => props.monstertype === 'Divine' && 'animatedBackgroundDivineColor 2s ease infinite'};
		animation: ${props => props.monstertype === 'Divine' && 'animatedBackgroundDivineColor 2s ease infinite'};

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
	top: -19px;
`

export const NameText = styled(Text)`
	position: relative;
	top: 0;
	font-size: 22px;
	font-weight: 700;
	color: ${props => props.namecolor};

	background: ${props =>
		props.monstertype === 'Divine' &&
		'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'};
	background-size: ${props => props.monstertype === 'Divine' && '350% 350%'};

	-webkit-background-clip: ${props => props.monstertype === 'Divine' && 'text'};
	-webkit-text-fill-color: ${props => props.monstertype === 'Divine' && 'transparent'};

	transition: all 0.1s ease;

	-webkit-animation: ${props => props.monstertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	-moz-animation: ${props => props.monstertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	animation: ${props => props.monstertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};

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
	top: 0;
	font-size: 22px;
	font-weight: 700;
	color: ${props => props.namecolor};
	text-transform: uppercase;
	text-shadow: ${props => props.monstertype !== 'Divine' && `0 0 5px ${props.namecolor}`};
	-webkit-text-shadow: ${props => props.monstertype !== 'Divine' && `0 0 5px ${props.namecolor}`};
	-moz-text-shadow: ${props => props.monstertype !== 'Divine' && `0 0 5px ${props.namecolor}`};

	background: ${props =>
		props.monstertype === 'Divine' &&
		'linear-gradient(270deg, #8e008e, #ff0000, #ff8e00, #ffff00, #008e00, #00c0c0, #400098)'};
	background-size: ${props => props.monstertype === 'Divine' && '350% 350%'};

	-webkit-background-clip: ${props => props.monstertype === 'Divine' && 'text'};
	-webkit-text-fill-color: ${props => props.monstertype === 'Divine' && 'transparent'};

	transition: all 0.1s ease;

	-webkit-animation: ${props => props.monstertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	-moz-animation: ${props => props.monstertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};
	animation: ${props => props.monstertype === 'Divine' && 'animatedColorMythicalColor 2s ease infinite'};

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

export const MonterAttackCharger = styled(Flex)`
	position: absolute;
	justify-content: center;
	height: 15px;
	width: 100%;
	margin: 0 auto;
	top: 33px;
	left: 0;

	div {
		height: 100%;
		width: 115px;
		background: none;
		border-radius: 10px;
		box-shadow: ${props => `0 0 5px 0 ${props.barcolor}`};
		-webkit-box-shadow: ${props => `0 0 5px 0 ${props.barcolor}`};
		-moz-box-shadow: ${props => `0 0 5px 0 ${props.barcolor}`};

		div {
			background: #e11c44;
		}
	}
`

export const FetchMonsterCountDownContainer = styled(Flex)`
	position: relative;
	top: 50%;
	left: calc(50% - 232px);
	width: fit-content;
	p {
		font-size: 30px;
		font-weight: 700;
		color: #fff;
		text-transform: uppercase;
		text-shadow: 0 0 7px #000;
		-webkit-text-shadow: 0 0 7px #000;
		-moz-text-shadow: 0 0 7px #000;
	}

	div {
		position: relative;
		bottom: 115px;
		width: 200px;
		height: 200px;

		box-shadow: 0 0 7px 0 #000;
	}
`
