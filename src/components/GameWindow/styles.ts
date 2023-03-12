import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { MAX_WIDTH } from '../../utils/constants'

export const GameWindowContainer = styled(Flex)`
	width: 80%;
	height: 70vh;
	position: relative;
	max-width: ${MAX_WIDTH}px;
	max-height: 700px;
	background-color: ${props => props.theme.primary};
	border-radius: 10px;
	margin: 0 auto;
	flex-direction: column;
	z-index: 0;

	background-image: url(${props => props.stage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
`

export const TrainerContainer = styled(Flex)`
	background-color: ${props => props.theme.secondary};
	padding: 0;
	margin: 10px;

	width: 10vw;
	height: 10vh;
	:hover {
		cursor: url(${props => props.imageString}), auto !important;
	}
`
