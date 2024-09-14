import { Flex, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Container = styled(Flex)`
	position: relative;
	width: 'inherit';
	height: 'inherit';
	z-index: -1;
	top: 75px;
`

export const ToBattle = styled(Image)`
	position: relative;

	:hover {
		opacity: 0.8;
	}
`

export const BackToCity = styled(Image)`
	position: relative;
	top: 300px;
	:hover {
		opacity: 0.8;
	}
`
