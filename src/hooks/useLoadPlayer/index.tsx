import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getPlayerData } from '../../storage/player/get/stats'
import { setPlayerStats, setPlayerItems } from '../../store/reducers/player'
import { IPlayerItems, IPlayerStats } from '../../store/reducers/types'
import usePlayer from '../usePlayerStats'
import { setPlayerData } from '../../storage/player/set/stats'
import { getPlayerEnabledStages } from '../../storage/stages/get/stage'
import { setPlayerStage } from '../../storage/stages/set/stage'
import { setEnabledStagesWorld1 } from '../../store/reducers/actions'

export const useLoadPlayerData = () => {
	const dispatch = useDispatch()

	const { playerStats: playerStatsFromStorage, playerItems: playerItemsFromStorage } = usePlayer()

	useEffect(() => {
		const playerData = getPlayerData()
		const playerEnabledStages = getPlayerEnabledStages()

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

			if (!playerEnabledStages) {
				setPlayerStage(1)
			}

			return
		}

		const playerStats: IPlayerStats = {
			health: playerData.maxHealth,
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

		if (!!playerEnabledStages) {
			dispatch(setEnabledStagesWorld1(playerEnabledStages))
		}
	}, [])
}
