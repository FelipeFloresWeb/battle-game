import { BATTLE_GAME_PLAYER_STAGE } from '../../../lib/constants'

export const setPlayerStage = (stage: number) => {
	window.localStorage.setItem(BATTLE_GAME_PLAYER_STAGE, JSON.stringify(stage))
}
