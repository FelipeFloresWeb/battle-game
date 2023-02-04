import { Flex, Progress } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import useActions from '../../hooks/useActions'
import useMonster from '../../hooks/useMonsterStats'
import usePlayer from '../../hooks/usePlayerStats'
import { setShowMonsterLoot, setStartMonsterAttack } from '../../store/reducers/actions'
import { setHideMonster, setMonsterData, setMonsterIsAttacking, setMonsterIsDead } from '../../store/reducers/monster'
import { setPlayerAttacking, setPlayerIsDead, setPlayerItems, setPlayerStats } from '../../store/reducers/player'
import { numeric } from '../../utils'
import { MONSTER_ATTACK_DURATION, MONSTER_ATTACK_INTERVAL } from '../../utils/constants'
import * as S from './styles'

export const Monster = () => {
	const dispatch = useDispatch()
	const [isAttacking, setIsAttacking] = useState(false)
	const [maxAttackInterval, setMaxAttackInterval] = useState(0)
	const [attackInterval, setAttackInterval] = useState(0)
	const {
		monsterHp,
		monsterMaxHp,
		monsterExp,
		monsterGold,
		monsterDiamond,
		monsterIsAttacking,
		monsterType,
		monsterData,
		monsterIsDead,
		monsterImage,
		hideMonster,
		monsterAtk,
	} = useMonster()

	const { playerAtk, playerStats, playerGold, playerItems, playerCanAttack, playerDiamond, playerIsDead } = usePlayer()

	const { startMonsterAttack } = useActions()

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
							diamond: playerDiamond + monsterDiamond,
						})
					)
					dispatch(setShowMonsterLoot(true))
				}, 2500)
			} else {
				dispatch(setMonsterData({ ...monsterData, stats: { ...monsterData?.stats, hp: monsterHp - damage } }))
			}
		},
		[
			dispatch,
			monsterData,
			monsterDiamond,
			monsterExp,
			monsterGold,
			monsterHp,
			playerDiamond,
			playerGold,
			playerItems,
			playerStats,
		]
	)

	const playerAttack = useCallback(() => {
		if (!playerCanAttack || monsterHp <= 0 || playerIsDead) return

		setIsAttacking(true)
		dispatch(setStartMonsterAttack(true))
		dispatch(setPlayerAttacking(true))
		hitMonster(playerAtk)

		setTimeout(() => {
			setIsAttacking(false)

			dispatch(setPlayerAttacking(false))
		}, 200)
	}, [dispatch, hitMonster, monsterHp, playerAtk, playerCanAttack, playerIsDead])

	const checkMonsterIsDead = useCallback(() => {
		if (monsterData?.name && monsterHp <= 0) {
			dispatch(setMonsterIsDead(true))
			dispatch(setStartMonsterAttack(false))

			setTimeout(() => {
				dispatch(setHideMonster(true))
			}, 2500)
		} else {
			dispatch(setMonsterIsDead(false))
			dispatch(setHideMonster(false))
		}
	}, [dispatch, monsterData?.name, monsterHp])

	const hitPlayer = useCallback(() => {
		dispatch(setMonsterIsAttacking(true))

		if (playerStats?.health - monsterAtk <= 0) {
			dispatch(setPlayerStats({ ...playerStats, health: 0 }))
			dispatch(setPlayerIsDead(true))

			setTimeout(() => {
				dispatch(setStartMonsterAttack(false))
			}, MONSTER_ATTACK_DURATION)
		} else {
			dispatch(setPlayerStats({ ...playerStats, health: playerStats?.health - monsterAtk }))
		}

		setTimeout(() => {
			dispatch(setMonsterIsAttacking(false))
		}, MONSTER_ATTACK_DURATION)
	}, [dispatch, monsterAtk, playerStats])

	useEffect(() => {
		checkMonsterIsDead()
	}, [checkMonsterIsDead])

	useEffect(() => {
		if (!startMonsterAttack) return

		const interval = setInterval(() => {
			if (attackInterval === maxAttackInterval) hitPlayer()
			setAttackInterval(prev => prev + 0.25)
			if (attackInterval >= maxAttackInterval) setAttackInterval(0)
		}, 250)

		if (monsterIsDead || playerIsDead) clearInterval(interval)

		return () => {
			clearInterval(interval)
		}
	}, [attackInterval, hitPlayer, maxAttackInterval, monsterIsDead, playerIsDead, startMonsterAttack])

	useEffect(() => {
		if (!hideMonster && maxAttackInterval === 0) setMaxAttackInterval(MONSTER_ATTACK_INTERVAL / 1000)
	}, [hideMonster, maxAttackInterval])

	useEffect(() => {
		if (hideMonster) {
			setMaxAttackInterval(0)
			setAttackInterval(0)
		}
	}, [hideMonster])

	return (
		<>
			{!isEmpty(monsterData) && !isEmpty(monsterType) && !hideMonster && (
				<S.MonsterContainer
					isdead={monsterIsDead.toString()}
					doattack={(!!monsterIsAttacking && !!startMonsterAttack && !monsterIsDead).toString()}
				>
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

					<S.MonterAttackCharger startmonsterattack={startMonsterAttack.toString()}>
						<Progress max={maxAttackInterval} value={attackInterval} />
					</S.MonterAttackCharger>

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
