import { Flex, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(Flex)`
	position: absolute;
	width: 90%;
	height: 100%;
	z-index: -1;
`

export const ToBattle = styled(Image)`
	position: relative;
	top: 32%;
	left: 80%;

	:hover {
		opacity: 0.8;
	}
`
