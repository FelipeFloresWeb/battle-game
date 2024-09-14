import { BATTLE_GAME_PLAYER_DATA } from '../../../lib/constants'
import { PlayerDataStorageKeys, PlayerDataStorage } from '../types'

interface SetPlayerDataProps {
	keys: PlayerDataStorageKeys[]
	values: number[]
}

export const setPlayerData = ({ keys, values }: SetPlayerDataProps) => {
	const playerData = window.localStorage.getItem(BATTLE_GAME_PLAYER_DATA)

	if (!playerData) {
		let storageObject: PlayerDataStorage = {} as PlayerDataStorage

		keys.forEach((k, i) => {
			storageObject[k] = values[i]
		})

		window.localStorage.setItem(BATTLE_GAME_PLAYER_DATA, JSON.stringify(storageObject))
		return
	}

	const playerDataParsed = JSON.parse(playerData)

	let storageObject: PlayerDataStorage = playerDataParsed

	keys.forEach((k, i) => {
		storageObject[k] = values[i]
	})

	window.localStorage.setItem(BATTLE_GAME_PLAYER_DATA, JSON.stringify(storageObject))
}
