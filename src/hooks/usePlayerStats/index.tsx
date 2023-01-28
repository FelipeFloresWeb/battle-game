import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
	selectPlayerCanAttack,
	selectPlayerIsAttacking,
	selectPlayerItems,
	selectPlayerStats,
} from '../../store/selectors/player'

const usePlayer = () => {
	const playerStats = useSelector((state: RootState) => selectPlayerStats(state))
	const playerIsAttacking = useSelector((state: RootState) => selectPlayerIsAttacking(state))
	const playerCanAttack = useSelector((state: RootState) => selectPlayerCanAttack(state))
	const playerItems = useSelector((state: RootState) => selectPlayerItems(state))

	const playerHp = useMemo(() => Math.round(playerStats?.health) || 0, [playerStats?.health])
	const playerMaxHp = useMemo(() => Math.round(playerStats?.maxHealth) || 0, [playerStats?.maxHealth])
	const playerAtk = useMemo(() => Math.round(playerStats?.attack) || 0, [playerStats?.attack])
	const playerDef = useMemo(() => Math.round(playerStats?.defense) || 0, [playerStats?.defense])
	const playerExp = useMemo(() => Math.round(playerStats?.exp) || 0, [playerStats?.exp])
	const playerMaxExp = useMemo(() => Math.round(playerStats?.maxExp) || 0, [playerStats?.maxExp])
	const playerAttackSpeed = useMemo(() => playerStats?.attackSpeed || 0, [playerStats?.attackSpeed])
	const playerDiamond = useMemo(() => Math.round(playerItems?.diamond) || 0, [playerItems?.diamond])
	const playerGold = useMemo(() => Math.round(playerItems?.gold) || 0, [playerItems?.gold])

	return {
		playerStats,
		playerCanAttack,
		playerHp,
		playerMaxHp,
		playerAtk,
		playerDef,
		playerExp,
		playerMaxExp,
		playerGold,
		playerDiamond,
		playerAttackSpeed,
		playerIsAttacking,
		playerItems,
	}
}

export default usePlayer
