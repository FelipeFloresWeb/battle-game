import types from './monsterPercentTable.json'
import { MonsterType } from './types'

export const selectMonsterType = () => {
	const randomNum = Math.random() * 101

	const percent = Number(randomNum.toFixed(2))

	const getType = function (): MonsterType {
		if (percent <= types.uncommon.percent && percent > types.rare.percent) {
			return types.uncommon
		}
		if (percent <= types.rare.percent && percent > types.epic.percent) {
			return types.rare
		}
		if (percent <= types.epic.percent && percent > types.legendary.percent) {
			return types.epic
		}
		if (percent <= types.legendary.percent && percent > types.divine.percent) {
			return types.legendary
		}
		if (percent <= types.divine.percent && percent >= 0) {
			return types.divine
		}
		return types.common
	}

	const monsterType = getType()

	return monsterType
}
