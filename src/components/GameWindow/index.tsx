import { useDispatch, useSelector } from 'react-redux'
import useActions from '../../hooks/useActions'
import usePlayer from '../../hooks/usePlayerStats'
import { RootState } from '../../store'
import { setCurrentCursor } from '../../store/reducers/cursor'
import { selectMyCursor } from '../../store/selectors/cursor'
import { ChangeScene } from '../ChangeScene'
import { Monster } from '../Monster'
import { MonsterLoot } from '../MonsterLoot'
import * as S from './styles'

export const GameWindow = () => {
	const { scene } = useActions()
	const { playerIsDead } = usePlayer()
	const dispatch = useDispatch()

	const stage = `images/stages/${scene}.webp`
	const { stage: currStage, stageMultyplierLoot, stageMultyplierStats } = useActions()
	const myCursor = useSelector((state: RootState) => selectMyCursor(state))

	return (
		<S.GameWindowContainer
			onMouseLeave={() => dispatch(setCurrentCursor('images/swords/0.webp'))}
			onMouseEnter={() => dispatch(setCurrentCursor(myCursor))}
			stage={stage}
			filter={playerIsDead ? 'grayscale(90%)' : ''}
		>
			<S.CurrStageContainer>
				{currStage === 0 ? (
					<p>Village</p>
				) : (
					<>
						{!playerIsDead && (
							<>
								<p>
									STAGE<span> {currStage}</span>
								</p>
								<small>current drop bonus {stageMultyplierLoot}x</small>
								<small>monster stats multiplier {stageMultyplierStats}x</small>
							</>
						)}
					</>
				)}
			</S.CurrStageContainer>
			<Monster />
			<ChangeScene />
			<MonsterLoot />
		</S.GameWindowContainer>
	)
}
