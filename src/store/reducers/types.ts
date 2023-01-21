import { MonsterData, MonsterType } from '../../pages/api/monster/types'

export interface IMonsterState {
	isDead: boolean
	isAttacking: boolean
	loadingMonsterType: boolean
	monsterType: MonsterType
	monsterData: MonsterData
}

export interface IPlayerState {
	playerIsAttacking: boolean
	playerIsDead: boolean
	hitPlayer: boolean
	canAttack: boolean
	stats: IPlayerStats
	items: IPlayerItems
}

export interface IPlayerStats {
	health: number
	maxHealth: number
	attack: number
	defense: number
	attackSpeed: number
	exp: number
	maxExp: number
	level: number
}

export interface IPlayerItems {
	gold: number
	diamond: number
}
