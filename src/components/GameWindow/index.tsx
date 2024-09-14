import { useDispatch, useSelector } from 'react-redux'
import { Flex } from '@chakra-ui/react'

import useActions from '../../hooks/useActions'
import usePlayer from '../../hooks/usePlayerStats'
import { RootState } from '../../store'
import { setCurrentCursor } from '../../store/reducers/cursor'
import { selectMyCursor } from '../../store/selectors/cursor'
import { ChangeScene } from '../ChangeScene'
import { Monster } from '../Monster'
import { MonsterLoot } from '../MonsterLoot'
import { setPlayerStats } from '../../store/reducers/player'
import { useLoadPlayerData } from '../../hooks/useLoadPlayer'
import { BuyContainer } from './BuyContainer'
import * as S from './styles'

export const GameWindow = () => {
	const { scene } = useActions()
	const { playerIsDead, playerHp, playerMaxHp, playerStats, playerAtk } = usePlayer()

	useLoadPlayerData()

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

			{playerMaxHp - playerHp > 0 && currStage === 0 && (
				<Flex
					onClick={() => {
						dispatch(setPlayerStats({ ...playerStats, health: playerMaxHp }))
					}}
					_hover={{ bg: '#000000' }}
					p={8}
					borderRadius='16px'
					position={'absolute'}
					bg='#000000a7'
					direction={'column'}
					marginRight={'200px'}
				>
					<span style={{ fontSize: '26px' }}>Restore Life</span>
					<span style={{ fontSize: '26px', color: 'green' }}>+{playerMaxHp - playerHp}</span>
				</Flex>
			)}

			{currStage === 0 && (
				<Flex direction='column' gap={2} marginTop='105px'>
					<BuyContainer currentStat={playerAtk} price={50} statName='attack' statValue={5} />
					<BuyContainer currentStat={playerMaxHp} price={100} statName='maxHealth' statValue={50} />
				</Flex>
			)}

			<Monster />
			<ChangeScene />
			<MonsterLoot />
		</S.GameWindowContainer>
	)
}
