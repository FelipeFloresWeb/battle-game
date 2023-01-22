import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(Flex)`
	flex-direction: column;
	position: relative;
	top: 35%;
	left: 44%;
	width: fit-content;
	color: #ffdf57;

	font-size: 48px;
	font-weight: 700;
	text-shadow: 0 0 10px #df8912;

	div:last-of-type {
		color: ${props => (props.dropediamond === 'true' ? '#6bb8fd' : '#ffdf57')};
		text-shadow: ${props => (props.dropediamond === 'true' ? '0 0 10px #0089ff' : '0 0 10px #df8912')};
	}
`
