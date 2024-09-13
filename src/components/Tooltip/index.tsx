import * as S from './styles'

interface Props {
	Children: React.ReactNode
	label: string
	placement?: 'top' | 'bottom' | 'left' | 'right'
}

export const CustomTooltip: React.FC<Props> = ({ Children, label, placement = 'top' }) => {
	return (
		<S.CustomTooltip placement={placement} label={label}>
			{Children}
		</S.CustomTooltip>
	)
}
