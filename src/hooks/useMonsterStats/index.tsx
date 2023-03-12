import { get } from 'lodash'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMonster } from '../../services/api/monster'

import { RootState } from '../../store'
import { setShowMonsterLoot } from '../../store/reducers/actions'
import { setLoadingMonsterData, setMonsterData, setMonsterLoot, setMonsterType } from '../../store/reducers/monster'
import {
	selectHideMonster,
	selectLoadingMonsterData,
	selectLoadingMonsterType,
	selectMonsterData,
	selectMonsterImage,
	selectMonsterIsAttacking,
	selectMonsterIsDead,
	selectMonsterLoot,
	selectMonsterType,
} from '../../store/selectors/monster'
import useActions from '../useActions'
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

	const { stageMultyplierLoot, stageMultyplierStats } = useActions()

	const monsterHp = Math.round(monsterData?.stats?.hp) || 0
	const monsterMaxHp = Math.round(monsterData?.stats?.maxHp) || 0
	const monsterDef = Math.round(monsterData?.stats?.defense) || 0
	const monsterAtk = Math.round(monsterData?.stats?.attack) || 0
	const monsterAttackSpeed = Math.round(monsterData?.stats?.attackSpeed)

	const { expMultiplier, dropMultiplier } = useRates()

	const monsterExp = monsterLoot?.exp * expMultiplier
	const monsterGold = monsterLoot?.gold || 0 * dropMultiplier || 0
	const monsterDiamond = monsterLoot?.diamond || 0 * dropMultiplier || 0

	const monsterIsDead = monsterHp <= 0

	const fetchMonsterData = useCallback(
		async (monsterId?: number) => {
			dispatch(setShowMonsterLoot(false))

			dispatch(setLoadingMonsterData(true))

			const fetchMonster = await getMonster(monsterId)

			const monsterType = get(fetchMonster, 'data.monsterType', {})
			const monsterData = get(fetchMonster, 'data.monster', {})
			const monsterLoot = get(fetchMonster, 'data.monster.loot', {})

			const multiplyMonsterDataStats = {
				...monsterData,
				stats: {
					...monsterData.stats,
					hp: monsterData.stats.hp * stageMultyplierStats,
					maxHp: monsterData.stats.maxHp * stageMultyplierStats,
					defense: monsterData.stats.defense * stageMultyplierStats,
					attack: monsterData.stats.attack * stageMultyplierStats,
				},
			}

			const multiplyMonsterLootStats = {
				...monsterLoot,
				exp: Math.round(monsterLoot.exp * stageMultyplierLoot),
				gold: Math.round(monsterLoot?.gold * stageMultyplierLoot),
				diamond: Math.round(monsterLoot?.diamond * stageMultyplierLoot),
			}

			dispatch(setMonsterType(monsterType))
			dispatch(setMonsterLoot(multiplyMonsterLootStats))
			dispatch(setMonsterData(multiplyMonsterDataStats))

			dispatch(setLoadingMonsterData(false))
		},
		[dispatch, stageMultyplierLoot, stageMultyplierStats]
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
		stageMultyplierLoot,
	}
}

export default useMonster
