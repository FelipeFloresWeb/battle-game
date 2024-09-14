import { useEffect } from 'react'
import { getPlayerData } from '../../storage/player/get/stats'
import { useDispatch } from 'react-redux'
import { setPlayerStats, setPlayerItems } from '../../store/reducers/player'
import { IPlayerItems, IPlayerStats } from '../../store/reducers/types'
import usePlayer from '../usePlayerStats'
import { setPlayerData } from '../../storage/player/set/stats'

export const useLoadPlayerData = () => {
	const dispatch = useDispatch()

	const { playerStats: playerStatsFromStorage, playerItems: playerItemsFromStorage } = usePlayer()
	useEffect(() => {
		const playerData = getPlayerData()

		if (!playerData) {
			setPlayerData({
				keys: ['health', 'maxHealth', 'attack', 'defense', 'attackSpeed', 'exp', 'maxExp', 'level', 'gold', 'diamond'],
				values: [
					playerStatsFromStorage.health,
					playerStatsFromStorage.maxHealth,
					playerStatsFromStorage.attack,
					playerStatsFromStorage.defense,
					playerStatsFromStorage.attackSpeed,
					playerStatsFromStorage.exp,
					playerStatsFromStorage.maxExp,
					playerStatsFromStorage.level,
					playerItemsFromStorage.gold,
					playerItemsFromStorage.diamond,
				],
			})

			return
		}

		const playerStats: IPlayerStats = {
			health: playerData.health,
			maxHealth: playerData.maxHealth,
			attack: playerData.attack,
			defense: playerData.defense,
			attackSpeed: playerData.attackSpeed,
			exp: playerData.exp,
			maxExp: playerData.maxExp,
			level: playerData.level,
		}

		const playerItems: IPlayerItems = {
			gold: playerData.gold,
			diamond: playerData.diamond,
		}

		dispatch(setPlayerStats(playerStats))
		dispatch(setPlayerItems(playerItems))
	}, [])
}
