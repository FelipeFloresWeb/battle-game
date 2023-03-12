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
	const { stage: currStage, stageMultyplierLoot, stageMultyplierStats } = useActions()

	return (
		<S.GameWindowContainer stage={stage} filter={playerIsDead ? 'grayscale(90%)' : ''}>
			<S.CurrStageContainer>
				<p>
					STAGE<span> {currStage}</span>
				</p>
				<small>current drop bonus {stageMultyplierLoot}x</small>
				<small>monster stats multiplier {stageMultyplierStats}x</small>
			</S.CurrStageContainer>
			<Monster />
			<ChangeScene />
			<MonsterLoot />
		</S.GameWindowContainer>
	)
}
