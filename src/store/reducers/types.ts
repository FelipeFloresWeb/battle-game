import { MonsterData, MonsterType } from '../../pages/api/monster/types'

export interface IMonsterState {
	isDead: boolean
	isAttacking: boolean
	loadingMonsterType: boolean
	monsterType: MonsterType
	monsterData: MonsterData
}
