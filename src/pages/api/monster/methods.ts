import types from './monsterTypes.json'
import { MonsterData, MonsterType } from './types'

export const selectMonsterType = () => {
	const randomNum = Math.random() * 100

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
		if (percent <= types.legendary.percent && percent > types.mythical.percent) {
			return types.legendary
		}
		if (percent <= types.mythical.percent && percent > types.divine.percent) {
			return types.mythical
		}
		if (percent <= types.divine.percent && percent >= 0) {
			return types.divine
		}
		return types.common
	}

	const monsterType = getType()

	return monsterType
}

export const dropGold = (monsterData: MonsterData) => {
	const randomNum = Math.random() * (monsterData.loot.maxGold - monsterData.loot.minGold) + monsterData.loot.minGold

	const gold = Number(randomNum.toFixed(0))

	return gold
}

export const dropDiamond = (monsterType: MonsterType) => {
	const randomChance = Math.random() * 101

	const chance = Number(randomChance.toFixed(2))

	if (chance <= monsterType.diamond.chance) {
		const randomNum = Math.random() * (monsterType.diamond.max - monsterType.diamond.min) + monsterType.diamond.min

		const diamond = Number(randomNum.toFixed(0))

		return diamond
	}
	return 0
}
