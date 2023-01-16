import { MonsterData } from '../../pages/api/monster/monster'
import { MonsterType } from '../../pages/api/monster/type'

export interface IMonsterState {
	isDead: boolean
	loadingMonsterType: boolean
	monsterType: MonsterType
	monsterData: MonsterData
}
