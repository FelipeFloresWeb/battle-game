import { Flex, Progress, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const UiContainer = styled(Flex)`
	width: 100%;
	justify-content: space-between;
	height: 100px;
	max-height: 300px;
	margin: 0 auto;
	position: fixed;
	bottom: 0;
`

export const UiBar = styled(Flex)`
	width: 250px;
	flex-direction: column;
	position: relative;
`

export const HpProgressBar = styled(Progress)`
	bottom: 56px;
	left: 88px;
	height: 25px;
	max-height: 150px;
	width: 161px;

	div {
		background-color: #ce3273;
	}
`

export const ProgressContainer = styled(Flex)``

export const HpText = styled(Text)`
	position: relative;
	font-size: 16px;
	bottom: 81px;
	font-weight: 600;
	color: ${props => props.theme.colors.primary};
	left: 130px;
	width: fit-content;
`

export const ExpText = styled(Text)`
	position: relative;
	font-size: 16px;
	bottom: 82px;
	font-weight: 600;
	color: ${props => props.theme.colors.primary};
	left: 130px;
	width: fit-content;
`

export const GoldText = styled(Flex)`
	position: relative;
	font-size: 16px;
	bottom: 80px;
	font-weight: 600;
	justify-content: center;
	color: #fff;
	left: 86px;
	width: 160px;
`

export const DiamondText = styled(Flex)`
	position: relative;
	font-size: 16px;
	bottom: 80px;
	font-weight: 600;
	justify-content: center;
	color: #fff;
	left: 86px;
	width: 160px;
`

export const GoldContainer = styled(Flex)`
	justify-content: center;
	p {
		position: relative;
		bottom: 54px;
		font-size: 16px;
		font-weight: 600;
		color: #fff;
		left: -38px;
	}
`

export const DiamondContainer = styled(Flex)`
	justify-content: center;
	p {
		position: relative;
		bottom: 56px;
		font-size: 16px;
		font-weight: 600;
		color: #fff;
		left: -38px;
	}
`

export const ExpProgressBar = styled(Progress)`
	height: 26px;
	left: 87px;
	bottom: 57px;
	max-height: 150px;
	width: 161px;

	div {
		background-color: #ff9b57;
	}
`

export const GoldProgressBar = styled(Progress)`
	bottom: 54px;
	left: 45px;
	height: 25px;
	max-height: 150px;
	width: 159px;

	div {
		background-color: #ff9b57;
	}
`

export const DiamondProgressBar = styled(Progress)`
	bottom: 56px;
	left: 43px;
	height: 25px;
	max-height: 150px;
	width: 154px;

	div {
		background-color: #4d98db;
	}
`
