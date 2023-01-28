import useActions from '../../hooks/useActions'
import { ChangeScene } from '../ChangeScene'
import { Monster } from '../Monster'
import { MonsterLoot } from '../MonsterLoot'
import * as S from './styles'

export const GameWindow = () => {
	const { scene } = useActions()

	const stage = `images/stages/${scene}.webp`

	return (
		<S.GameWindowContainer stage={stage}>
			<Monster />
			<ChangeScene />
			<MonsterLoot />
		</S.GameWindowContainer>
	)
}
