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
import { Flex, Text } from '@chakra-ui/react'
import { setPlayerItems, setPlayerStats } from '../../store/reducers/player'
import { toast } from 'react-toastify'

export const GameWindow = () => {
	const { scene } = useActions()
	const {
		playerIsDead,
		playerHp,
		playerMaxHp,
		playerExp,
		playerMaxExp,
		playerGold,
		playerDiamond,
		playerHpPercent,
		playerItems,
		playerStats,
		playerAtk,
	} = usePlayer()

	const dispatch = useDispatch()

	const stage = `images/stages/${scene}.webp`
	const { stage: currStage, stageMultyplierLoot, stageMultyplierStats } = useActions()
	const myCursor = useSelector((state: RootState) => selectMyCursor(state))

	const ATTACK_PRICE = 50

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
					onClick={() => dispatch(setPlayerStats({ ...playerStats, health: playerMaxHp }))}
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
				<Flex
					onMouseEnter={() => dispatch(setCurrentCursor('images/swords/0.webp'))}
					onMouseLeave={() => dispatch(setCurrentCursor(myCursor))}
					onClick={() => {
						if (playerGold < ATTACK_PRICE) {
							toast.error(`You need ${ATTACK_PRICE} golds to buy attack`)
							return
						}

						dispatch(
							setPlayerItems({
								...playerItems,
								gold: playerItems.gold - ATTACK_PRICE,
							})
						)

						dispatch(setPlayerStats({ ...playerStats, attack: playerAtk + 5 }))

						toast.success('Attack +5')
					}}
					_hover={{ bg: '#000000' }}
					p={4}
					borderRadius='16px'
					position={'absolute'}
					bg='#000000a7'
					direction={'column'}
					marginRight={'200px'}
					marginTop={'150px'}
				>
					<Flex gap={4}>
						<span style={{ fontSize: '26px' }}>Buy Attack</span>
						<span style={{ fontSize: '26px', color: 'green', fontWeight: '700' }}>+5</span>
					</Flex>
					<span style={{ fontSize: '22px', color: '#ff9b57' }}>(cost {ATTACK_PRICE} golds)</span>
					<span style={{ marginTop: '20px', fontSize: '22px', color: 'white' }}>current attack ({playerAtk})</span>
				</Flex>
			)}
			<Monster />
			<ChangeScene />
			<MonsterLoot />
		</S.GameWindowContainer>
	)
}
