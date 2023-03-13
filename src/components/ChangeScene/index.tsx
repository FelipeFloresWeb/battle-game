import { Tooltip } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useActions from '../../hooks/useActions'
import { RootState } from '../../store'
import {
	setCenario,
	setFetchMonsterInterval,
	setIncrementeEnabledStagesWorld1,
	setShowMonsterLoot,
	setStage,
} from '../../store/reducers/actions'
import { resetMonsterState } from '../../store/reducers/monster'
import { battleStarted } from '../../store/selectors/actions'
import { FETCH_MONSTER_INTERVAL } from '../../utils/constants'
import * as S from './styles'

export const ChangeScene = () => {
	const dispatch = useDispatch()

	const { showMonsterLoot, stage, fetchMonsterInterval } = useActions()

	const selectBattleStarted = useSelector((state: RootState) => battleStarted(state))

	const changeStage = (number: number) => {
		dispatch(setShowMonsterLoot(false))
		dispatch(setStage(number))
	}

	useEffect(() => {
		if (stage === 0) {
			dispatch(setCenario(0))
		}
		if (stage > 0 && stage < 10) {
			dispatch(setCenario(1))
		}
		if (stage >= 10 && stage < 20) {
			dispatch(setCenario(2))
		}
		if (stage >= 20 && stage < 30) {
			dispatch(setCenario(3))
		}
		if (stage >= 30 && stage < 40) {
			dispatch(setCenario(4))
		}
		if (stage >= 40 && stage < 50) {
			dispatch(setCenario(5))
		}
		if (stage >= 50) {
			dispatch(setCenario(6))
		}
	}, [dispatch, stage])

	return (
		<S.Container justifyContent={stage === 0 ? 'flex-end' : 'space-between'}>
			{stage === 0 && (
				<S.ToBattle
					onClick={() => {
						changeStage(1)
						dispatch(setFetchMonsterInterval(FETCH_MONSTER_INTERVAL))
					}}
					draggable={false}
					boxSize='128px'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/toBattle.webp'
					alt='HP_BAR'
				/>
			)}
			{stage > 0 && !selectBattleStarted && (
				<Tooltip label='Back to the city...' borderRadius='8px' fontSize='md' hasArrow placement='top'>
					<S.BackToCity
						onClick={() => {
							dispatch(resetMonsterState())
							changeStage(0)
						}}
						draggable={false}
						boxSize='128px'
						margin='0 10px'
						objectFit='cover'
						src='images/ui/backSign.webp'
						alt='HP_BAR'
					/>
				</Tooltip>
			)}
			{stage > 0 && showMonsterLoot && (
				<S.ToBattle
					onClick={() => {
						changeStage(stage + 1)
						dispatch(setIncrementeEnabledStagesWorld1())
						dispatch(setFetchMonsterInterval(FETCH_MONSTER_INTERVAL))
					}}
					draggable={false}
					boxSize='128px'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/nextScene.webp'
					alt='HP_BAR'
				/>
			)}
		</S.Container>
	)
}
