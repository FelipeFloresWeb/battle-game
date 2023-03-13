import { Tooltip } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CustomTooltip = styled(Tooltip)`
	background-color: ${props => props.theme.colors.primary};
	border-radius: 5px;
`
