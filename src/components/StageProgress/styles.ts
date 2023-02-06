import { Accordion, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { MAX_WIDTH } from '../../utils/constants'

export const StageProgressContainer = styled(Flex)`
	justify-content: space-between;
	width: 100%;
	max-width: ${MAX_WIDTH}px;
	max-height: 300px;
	margin: 15px auto 0;
	padding: 15px 0;
	overflow-x: scroll;

	img {
		margin: 0 2px;
	}

	::-webkit-scrollbar {
		width: 13px;
		height: 13px;
		padding: 18px;
		-webkit-border-radius: 1ex;
	}

	::-webkit-scrollbar-thumb {
		background: #ccc;
		padding: 8px;
		width: 6px;
		height: 6px;
		-webkit-border-radius: 1ex;
	}

	::-webkit-scrollbar-button:start:decrement,
	pre::-webkit-scrollbar-button:end:increment {
		display: none;
	}

	::-webkit-scrollbar-thumb:vertical,
	pre::-webkit-scrollbar-thumb:horizontal {
		height: 3px;
		width: 3px;
		margin: 3px;
	}
`

export const ToggleStage = styled(Accordion)`
	border-radius: 15px;

	div:first-of-type {
		border-top-width: 0;
	}
	div:last-of-type {
		border-bottom-width: 0;
	}
`
