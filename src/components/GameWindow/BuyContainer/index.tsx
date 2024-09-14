import { Flex } from '@chakra-ui/react'
import { toast } from 'react-toastify'

import { setPlayerData } from '../../../storage/player/set/stats'
import { setCurrentCursor } from '../../../store/reducers/cursor'
import { setPlayerItems, setPlayerStats } from '../../../store/reducers/player'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { selectMyCursor } from '../../../store/selectors/cursor'
import usePlayer from '../../../hooks/usePlayerStats'

interface Props {
	price: number
	statName: 'attack' | 'maxHealth'
	currentStat: number
	statValue: number
}

export const BuyContainer = ({ price, statName, currentStat, statValue }: Props) => {
	const dispatch = useDispatch()

	const myCursor = useSelector((state: RootState) => selectMyCursor(state))

	const { playerGold, playerItems, playerStats } = usePlayer()

	return (
		<Flex
			onMouseEnter={() => dispatch(setCurrentCursor('images/swords/0.webp'))}
			onMouseLeave={() => dispatch(setCurrentCursor(myCursor))}
			onClick={() => {
				if (playerGold < price) {
					toast.error(`You need ${price} golds to buy ${statName}`)
					return
				}

				dispatch(
					setPlayerItems({
						...playerItems,
						gold: playerItems.gold - price,
					})
				)

				dispatch(setPlayerStats({ ...playerStats, [statName]: currentStat + statValue }))

				setPlayerData({
					keys: [statName, 'gold'],
					values: [currentStat + statValue, playerItems.gold - price],
				})

				toast.success(`${statName} +${statValue}`)
			}}
			_hover={{ bg: '#000000' }}
			p={4}
			borderRadius='16px'
			position={'relative'}
			bg='#000000a7'
			direction={'column'}
			width={'300px'}
		>
			<Flex gap={4}>
				<span style={{ fontSize: '18px' }}>Buy {statName}</span>
				<span style={{ fontSize: '18px', color: 'green', fontWeight: '700' }}>+{statValue}</span>
			</Flex>
			<span style={{ fontSize: '18px', color: '#ff9b57' }}>(cost {price} golds)</span>
			<span style={{ marginTop: '18px', fontSize: '18px', color: 'white' }}>
				current {statName} ({currentStat})
			</span>
		</Flex>
	)
}
