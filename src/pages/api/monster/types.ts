export interface IMonsterData {
	data: {
		monster: MonsterData
		monsterType: MonsterType
	}
}

export type Error = {
	message: string
}

export type MonsterData = {
	index: number
	name: string
	stats: MonsterStats
	loot: MonsterLoot
}

export type MonsterStats = {
	maxHp: number
	hp: number
	attack: number
	defense: number
	attackSpeed: number
}

export type MonsterLoot = {
	minGold: number
	maxGold: number
	exp: number
	diamond?: number
	gold?: number
}

export interface IMonster {
	[index: string]: MonsterData
}

export type MonsterType = {
	name: string
	color: string
	percent: number
	statsMultiplier: number
	lootMultiplier: number
	diamond: {
		chance: number
		min: number
		max: number
	}
}
