import useActions from '../../hooks/useActions'
import usePlayer from '../../hooks/usePlayerStats'
import { ChangeScene } from '../ChangeScene'
import { Monster } from '../Monster'
import { MonsterLoot } from '../MonsterLoot'
import * as S from './styles'

export const GameWindow = () => {
	const { scene } = useActions()
	const { playerIsDead } = usePlayer()

	const stage = `images/stages/${scene}.webp`

	return (
		<S.GameWindowContainer stage={stage} filter={playerIsDead ? 'grayscale(90%)' : ''}>
			<Monster />
			<ChangeScene />
			<MonsterLoot />
		</S.GameWindowContainer>
	)
}
