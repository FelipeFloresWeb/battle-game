import { BATTLE_GAME_PLAYER_DATA } from '../../../lib/constants'
import { PlayerDataStorage } from '../types'

export const getPlayerData = () => {
	const playerData = window.localStorage.getItem(BATTLE_GAME_PLAYER_DATA)

	if (!playerData) {
		return null
	}

	const data: PlayerDataStorage = JSON.parse(playerData)

	return data
}
