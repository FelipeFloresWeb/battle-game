import { Flex } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useMonster from '../../hooks/useMonsterStats'
import usePlayer from '../../hooks/usePlayerStats'
import { setShowMonsterLoot } from '../../store/reducers/actions'
import { setHideMonster, setMonsterData, setMonsterIsAttacking, setMonsterIsDead } from '../../store/reducers/monster'
import { setPlayerAttacking, setPlayerItems, setPlayerStats } from '../../store/reducers/player'

import { numeric } from '../../utils'
import * as S from './styles'

export const Monster = () => {
	const dispatch = useDispatch()
	const [isAttacking, setIsAttacking] = useState(false)

	const {
		monsterHp,
		monsterMaxHp,
		monsterAtk,
		monsterExp,
		monsterGold,
		monsterIsAttacking,
		monsterType,
		monsterData,
		monsterIsDead,
		monsterImage,
		hideMonster,
	} = useMonster()

	const { playerAtk, playerStats, playerGold, playerItems, playerCanAttack } = usePlayer()

	const hitMonster: (damage: number) => void = useCallback(
		(damage: number) => {
			if (monsterHp - damage <= 0) {
				dispatch(setMonsterData({ ...monsterData, stats: { ...monsterData?.stats, hp: 0 } }))

				setTimeout(() => {
					dispatch(setPlayerStats({ ...playerStats, exp: playerStats.exp + monsterExp }))
					dispatch(
						setPlayerItems({
							...playerItems,
							gold: playerGold + monsterGold,
						})
					)
					dispatch(setShowMonsterLoot(true))
				}, 2500)
			} else {
				dispatch(setMonsterData({ ...monsterData, stats: { ...monsterData?.stats, hp: monsterHp - damage } }))
			}
		},
		[dispatch, monsterData, monsterExp, monsterGold, monsterHp, playerGold, playerItems, playerStats]
	)

	const playerAttack = useCallback(() => {
		if (!playerCanAttack || monsterHp <= 0) return

		setIsAttacking(true)
		dispatch(setPlayerAttacking(true))
		hitMonster(playerAtk)

		setTimeout(() => {
			setIsAttacking(false)

			dispatch(setPlayerAttacking(false))
		}, 200)
	}, [dispatch, hitMonster, monsterHp, playerAtk, playerCanAttack])

	const checkMonsterIsDead = useCallback(() => {
		if (monsterData?.name && monsterHp <= 0) {
			dispatch(setMonsterIsDead(true))
			setTimeout(() => {
				dispatch(setHideMonster(true))
			}, 2500)
		} else {
			dispatch(setMonsterIsDead(false))
			dispatch(setHideMonster(false))
		}
	}, [dispatch, monsterData?.name, monsterHp])

	const monsterAttack = useCallback(() => {
		dispatch(setMonsterIsAttacking(true))

		if (playerStats?.health - monsterAtk <= 0) {
			dispatch(setPlayerStats({ ...playerStats, health: 0 }))
		} else {
			dispatch(setPlayerStats({ ...playerStats, health: playerStats?.health - monsterAtk }))
		}

		setTimeout(() => {
			dispatch(setMonsterIsAttacking(false))
		}, 200)
	}, [dispatch, monsterAtk, playerStats])

	useEffect(() => {
		if (monsterIsDead) return
		const attack = setInterval(() => {
			monsterAttack()
		}, 5000)

		monsterIsDead && clearInterval(attack)

		return () => {
			clearInterval(attack)
		}
	}, [monsterAttack, monsterIsDead])

	useEffect(() => {
		checkMonsterIsDead()
	}, [checkMonsterIsDead])

	return (
		<>
			{!isEmpty(monsterData) && !hideMonster && (
				<S.MonsterContainer isdead={monsterIsDead.toString()} monsterattacking={monsterIsAttacking.toString()}>
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
			)}
		</>
	)
}
