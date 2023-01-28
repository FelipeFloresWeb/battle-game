import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
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
	const monsterType = useSelector((state: RootState) => selectMonsterType(state))
	const monsterData = useSelector((state: RootState) => selectMonsterData(state))
	const monsterImage = useSelector((state: RootState) => selectMonsterImage(state))
	const selectMonsterDead = useSelector((state: RootState) => selectMonsterIsDead(state))
	const monsterIsAttacking = useSelector((state: RootState) => selectMonsterIsAttacking(state))
	const loadingMonsterType = useSelector((state: RootState) => selectLoadingMonsterType(state))
	const loadingMonsterData = useSelector((state: RootState) => selectLoadingMonsterData(state))
	const hideMonster = useSelector((state: RootState) => selectHideMonster(state))

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
	const monsterExp = useMemo(() => monsterData?.loot?.exp, [monsterData?.loot?.exp])
	const monsterGold = useMemo(() => monsterData?.loot?.gold || 0, [monsterData?.loot?.gold])
	const monsterDiamond = useMemo(() => monsterData?.loot?.diamond || 0, [monsterData?.loot?.diamond])

	const monsterIsDead = useMemo(() => monsterHp <= 0, [monsterHp])

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
