import { get } from 'lodash'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMonster } from '../../services/api/monster'

import { RootState } from '../../store'
import { setShowMonsterLoot } from '../../store/reducers/actions'
import { setLoadingMonsterData, setMonsterData, setMonsterLoot, setMonsterType } from '../../store/reducers/monster'
import { selectMonsterLoot } from '../../store/selectors/actions'
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
import useRates from '../useRates'

const useMonster = () => {
	const dispatch = useDispatch()
	const monsterType = useSelector((state: RootState) => selectMonsterType(state))
	const monsterData = useSelector((state: RootState) => selectMonsterData(state))
	const monsterImage = useSelector((state: RootState) => selectMonsterImage(state))
	const selectMonsterDead = useSelector((state: RootState) => selectMonsterIsDead(state))
	const monsterIsAttacking = useSelector((state: RootState) => selectMonsterIsAttacking(state))
	const loadingMonsterType = useSelector((state: RootState) => selectLoadingMonsterType(state))
	const loadingMonsterData = useSelector((state: RootState) => selectLoadingMonsterData(state))
	const hideMonster = useSelector((state: RootState) => selectHideMonster(state))
	const monsterLoot = useSelector((state: RootState) => selectMonsterLoot(state))

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

	const { expMultiplier, dropMultiplier } = useRates()

	const monsterExp = useMemo(() => monsterLoot?.exp * expMultiplier, [expMultiplier, monsterLoot?.exp])
	const monsterGold = useMemo(() => monsterLoot?.gold || 0 * dropMultiplier || 0, [dropMultiplier, monsterLoot?.gold])
	const monsterDiamond = useMemo(
		() => monsterLoot?.diamond || 0 * dropMultiplier || 0,
		[dropMultiplier, monsterLoot?.diamond]
	)

	const monsterIsDead = useMemo(() => monsterHp <= 0, [monsterHp])

	const fetchMonsterData = useCallback(
		async (monsterId?: number) => {
			dispatch(setShowMonsterLoot(false))

			dispatch(setLoadingMonsterData(true))

			const fetchMonster = await getMonster(monsterId)

			const monsterType = get(fetchMonster, 'data.monsterType', {})
			const monsterData = get(fetchMonster, 'data.monster', {})
			const monsterLoot = get(fetchMonster, 'data.monster.loot', {})

			dispatch(setMonsterType(monsterType))
			dispatch(setMonsterLoot(monsterLoot))
			dispatch(setMonsterData(monsterData))

			dispatch(setLoadingMonsterData(false))
		},
		[dispatch]
	)

	return {
		monsterType,
		monsterData,
		monsterImage,
		monsterIsDead,
		selectMonsterDead,
		monsterIsAttacking,
		loadingMonsterType,
		loadingMonsterData,
		monsterLoot,
		monsterHp,
		monsterMaxHp,
		monsterDef,
		monsterAtk,
		monsterAttackSpeed,
		monsterExp,
		monsterGold,
		hideMonster,
		monsterDiamond,
		fetchMonsterData,
	}
}

export default useMonster
