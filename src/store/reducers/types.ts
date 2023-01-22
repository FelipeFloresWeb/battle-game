import { MonsterData, MonsterType } from '../../pages/api/monster/types'

export interface IMonsterState {
	isDead: boolean
	isAttacking: boolean
	loadingMonsterData: boolean
	loadingMonsterType: boolean
	monsterType: MonsterType
	monsterData: MonsterData
	image: string
	hideMonster: boolean
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

export interface IActionsState {
	showMonsterLoot: boolean
}
