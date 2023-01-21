import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { IPlayerItems, IPlayerStats } from '../../store/reducers/types'
import {
	selectPlayerCanAttack,
	selectPlayerIsAttacking,
	selectPlayerItems,
	selectPlayerStats,
} from '../../store/selectors/player'

const usePlayer = () => {
	const playerStats: IPlayerStats = useSelector((state: any) => selectPlayerStats(state))
	const playerIsAttacking: boolean = useSelector((state: any) => selectPlayerIsAttacking(state))
	const playerCanAttack: boolean = useSelector((state: any) => selectPlayerCanAttack(state))
	const playerItems: IPlayerItems = useSelector((state: any) => selectPlayerItems(state))

	const playerHp: number = useMemo(() => Math.round(playerStats?.health) || 0, [playerStats?.health])
	const playerMaxHp: number = useMemo(() => Math.round(playerStats?.maxHealth) || 0, [playerStats?.maxHealth])
	const playerAtk: number = useMemo(() => Math.round(playerStats?.attack) || 0, [playerStats?.attack])
	const playerDef: number = useMemo(() => Math.round(playerStats?.defense) || 0, [playerStats?.defense])
	const playerExp: number = useMemo(() => Math.round(playerStats?.exp) || 0, [playerStats?.exp])
	const playerMaxExp: number = useMemo(() => Math.round(playerStats?.maxExp) || 0, [playerStats?.maxExp])
	const playerAttackSpeed: number = useMemo(() => playerStats?.attackSpeed || 0, [playerStats?.attackSpeed])
	const playerDiamond: number = useMemo(() => Math.round(playerItems?.diamond) || 0, [playerItems?.diamond])
	const playerGold: number = useMemo(() => Math.round(playerItems?.gold) || 0, [playerItems?.gold])

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
