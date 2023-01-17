import { Flex } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MonsterData, MonsterType } from '../../pages/api/monster/types'
import { setMonsterData, setMonsterIsDead } from '../../store/reducers/monster'
import { IMonsterState } from '../../store/reducers/types'
import {
	selectMonsterData,
	selectMonsterImage,
	selectMonsterIsDead,
	selectMonsterType,
} from '../../store/selectors/monster'
import { selectPlayerCanAttack } from '../../store/selectors/player'

import { numeric } from '../../utils'
import * as S from './styles'

export const Monster = () => {
	const [isAttacking, setIsAttacking] = useState(false)
	const [monsterAttacking, setMonsterAttacking] = useState(false)

	const dispatch = useDispatch()

	const monsterType: MonsterType = useSelector((state: any) => selectMonsterType(state))
	const monsterData: MonsterData = useSelector((state: IMonsterState) => selectMonsterData(state))
	const monsterImage: string = useSelector((state: any) => selectMonsterImage(state))
	const monsterIsDead = useSelector((state: IMonsterState) => selectMonsterIsDead(state))
	const playerCanAttack = useSelector((state: any) => selectPlayerCanAttack(state))

	const monsterHp = useMemo(() => Math.round(monsterData?.stats?.hp) || 0, [monsterData?.stats?.hp])
	const monsterMaxHp = useMemo(() => Math.round(monsterData?.stats?.maxHp) || 0, [monsterData?.stats?.maxHp])
	const monsterDef = useMemo(() => Math.round(monsterData?.stats?.defense) || 0, [monsterData?.stats?.defense])
	const monsterAtk = useMemo(() => Math.round(monsterData?.stats?.attack) || 0, [monsterData?.stats?.attack])

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

	const checkMonsterIsDead = useCallback(() => {
		if (monsterHp <= 0) {
			dispatch(setMonsterIsDead(true))
		} else {
			dispatch(setMonsterIsDead(false))
		}
	}, [dispatch, monsterHp])

	const hitMonster = useCallback(
		(damage: number) => {
			if (monsterHp - damage <= 0) {
				dispatch(setMonsterData({ ...monsterData, stats: { ...monsterData?.stats, hp: 0 } }))
			} else {
				dispatch(setMonsterData({ ...monsterData, stats: { ...monsterData?.stats, hp: monsterHp - damage } }))
			}
		},
		[dispatch, monsterData, monsterHp]
	)

	const playerAttack = useCallback(() => {
		if (!playerCanAttack || monsterHp <= 0) return

		setIsAttacking(true)

		hitMonster(5)

		setTimeout(() => {
			setIsAttacking(false)
		}, 200)
	}, [hitMonster, monsterHp, playerCanAttack])

	const monsterAttack = useCallback(() => {
		setMonsterAttacking(true)

		setTimeout(() => {
			setMonsterAttacking(false)
		}, 1000)
	}, [])

	useEffect(() => {
		const attack = setInterval(() => {
			monsterAttack()
		}, 5000)

		return () => {
			clearInterval(attack)
		}
	}, [monsterAttack])

	useEffect(() => {
		checkMonsterIsDead()
	}, [checkMonsterIsDead])

	return (
		<S.MonsterContainer isdead={monsterIsDead.toString()} monsterattacking={monsterAttacking.toString()}>
			<S.MonsterTypeText montertype={monsterType?.name} namecolor={monsterType?.color}>
				{monsterType?.name}
			</S.MonsterTypeText>
			<S.NameText montertype={monsterType?.name} namecolor={monsterType?.color}>
				{monsterData?.name}
			</S.NameText>

			<S.HealthContainer>
				<S.HealthProgressBar
					montertype={monsterType?.name}
					barcolor={monsterType?.color}
					borderRadius='5px'
					max={monsterMaxHp}
					value={monsterHp}
				/>
				<Flex w='100%' textAlign='center'>
					<S.HealthText>{numeric(monsterHp, 0)}</S.HealthText>
				</Flex>
			</S.HealthContainer>
			<S.MonsterImage
				isattacking={isAttacking.toString()}
				isdead={monsterIsDead.toString()}
				onClick={playerAttack}
				draggable={false}
				src={monsterImage}
				alt='Monster'
			/>
		</S.MonsterContainer>
	)
}
