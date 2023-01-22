import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MonsterData, MonsterType } from '../../pages/api/monster/types'
import { IMonsterState } from '../../store/reducers/types'
import {
	selectHideMonster,
	selectLoadingMonsterData,
	selectLoadingMonsterType,
	selectMonsterData,
	selectMonsterImage,
	selectMonsterIsAttacking,
	selectMonsterIsDead,
	selectMonsterType,
} from '../../store/selectors/monster'

const useMonster = () => {
	const monsterType: MonsterType = useSelector((state: IMonsterState) => selectMonsterType(state))
	const monsterData: MonsterData = useSelector((state: IMonsterState) => selectMonsterData(state))
	const monsterImage: string = useSelector((state: IMonsterState) => selectMonsterImage(state))
	const selectMonsterDead: boolean = useSelector((state: IMonsterState) => selectMonsterIsDead(state))
	const monsterIsAttacking: boolean = useSelector((state: IMonsterState) => selectMonsterIsAttacking(state))
	const loadingMonsterType: boolean = useSelector((state: IMonsterState) => selectLoadingMonsterType(state))
	const loadingMonsterData: boolean = useSelector((state: IMonsterState) => selectLoadingMonsterData(state))
	const hideMonster: boolean = useSelector((state: IMonsterState) => selectHideMonster(state))

	const monsterHp: number = useMemo(() => Math.round(monsterData?.stats?.hp) || 0, [monsterData?.stats?.hp])
	const monsterMaxHp: number = useMemo(() => Math.round(monsterData?.stats?.maxHp) || 0, [monsterData?.stats?.maxHp])
	const monsterDef: number = useMemo(() => Math.round(monsterData?.stats?.defense) || 0, [monsterData?.stats?.defense])
	const monsterAtk: number = useMemo(
		() => Math.round(monsterData?.stats?.attack * monsterType?.statsMultiplier) || 0,
		[monsterData?.stats?.attack, monsterType?.statsMultiplier]
	)
	const monsterAttackSpeed: number = useMemo(
		() => Math.round(monsterData?.stats?.attackSpeed),
		[monsterData?.stats?.attackSpeed]
	)
	const monsterExp: number = useMemo(() => monsterData?.loot?.exp, [monsterData?.loot?.exp])
	const monsterGold: number = useMemo(() => monsterData?.loot?.gold || 0, [monsterData?.loot?.gold])
	const monsterDiamond: number = useMemo(() => monsterData?.loot?.diamond || 0, [monsterData?.loot?.diamond])

	const monsterIsDead: boolean = useMemo(() => monsterHp <= 0, [monsterHp])

	return {
		monsterType,
		monsterData,
		monsterImage,
		monsterIsDead,
		selectMonsterDead,
		monsterIsAttacking,
		loadingMonsterType,
		loadingMonsterData,
		monsterHp,
		monsterMaxHp,
		monsterDef,
		monsterAtk,
		monsterAttackSpeed,
		monsterExp,
		monsterGold,
		hideMonster,
		monsterDiamond,
	}
}

export default useMonster
