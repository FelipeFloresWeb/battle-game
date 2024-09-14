import { BATTLE_GAME_PLAYER_STAGE } from '../../../lib/constants'

export const getPlayerEnabledStages = () => {
	const playerData = window.localStorage.getItem(BATTLE_GAME_PLAYER_STAGE)

	if (!playerData) {
		return null
	}

	const stage: number = JSON.parse(playerData)

	return stage
}
