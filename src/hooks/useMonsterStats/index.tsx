import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { MonsterData, MonsterType } from '../../pages/api/monster/types'
import { IMonsterState } from '../../store/reducers/types'
import {
	selectLoadingMonsterData,
	selectLoadingMonsterType,
	selectMonsterData,
	selectMonsterImage,
	selectMonsterIsAttacking,
	selectMonsterIsDead,
	selectMonsterType,
} from '../../store/selectors/monster'

const useMonster = () => {
	const monsterType: MonsterType = useSelector((state: any) => selectMonsterType(state))
	const monsterData: MonsterData = useSelector((state: IMonsterState) => selectMonsterData(state))
	const monsterImage: string = useSelector((state: any) => selectMonsterImage(state))
	const monsterIsDead = useSelector((state: IMonsterState) => selectMonsterIsDead(state))
	const monsterIsAttacking = useSelector((state: any) => selectMonsterIsAttacking(state))
	const loadingMonsterType = useSelector((state: any) => selectLoadingMonsterType(state))
	const loadingMonsterData = useSelector((state: any) => selectLoadingMonsterData(state))

	const monsterHp = useMemo(() => Math.round(monsterData?.stats?.hp) || 0, [monsterData?.stats?.hp])
	const monsterMaxHp = useMemo(() => Math.round(monsterData?.stats?.maxHp) || 0, [monsterData?.stats?.maxHp])
	const monsterDef = useMemo(() => Math.round(monsterData?.stats?.defense) || 0, [monsterData?.stats?.defense])
	const monsterAtk = useMemo(
		() => Math.round(monsterData?.stats?.attack * monsterType?.statsMultiplier) || 0,
		[monsterData?.stats?.attack, monsterType?.statsMultiplier]
	)
	const monsterAttackSpeed = useMemo(
		() => Math.round(monsterData?.stats?.attackSpeed),
		[monsterData?.stats?.attackSpeed]
	)
	const monsterExp = useMemo(
		() => monsterData?.loot?.exp * monsterType?.lootMultiplier,
		[monsterData?.loot?.exp, monsterType?.lootMultiplier]
	)
	const monsterGold = useMemo(
		() => monsterData?.loot?.minGold * monsterType?.lootMultiplier,
		[monsterData?.loot?.minGold, monsterType?.lootMultiplier]
	)

	return {
		monsterType,
		monsterData,
		monsterImage,
		monsterIsDead,
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
	}
}

export default useMonster
