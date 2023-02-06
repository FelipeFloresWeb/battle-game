import { Flex, Progress, Spinner, Text } from '@chakra-ui/react'
import { isEmpty } from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import useActions from '../../hooks/useActions'
import useMonster from '../../hooks/useMonsterStats'
import usePlayer from '../../hooks/usePlayerStats'
import { setFetchMonsterInterval, setShowMonsterLoot, setStartMonsterAttack } from '../../store/reducers/actions'
import {
	resetMonsterState,
	setHideMonster,
	setMonsterData,
	setMonsterIsAttacking,
	setMonsterIsDead,
} from '../../store/reducers/monster'
import { setPlayerAttacking, setPlayerIsDead, setPlayerItems, setPlayerStats } from '../../store/reducers/player'
import { numeric } from '../../utils'
import { MONSTER_ATTACK_DURATION } from '../../utils/constants'
import * as S from './styles'

export const Monster = () => {
	const dispatch = useDispatch()
	const [isAttacking, setIsAttacking] = useState(false)
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
		fetchMonsterData,
		monsterAttackSpeed,
	} = useMonster()

	const { playerAtk, playerStats, playerGold, playerItems, playerCanAttack, playerDiamond, playerIsDead } = usePlayer()

	const { startMonsterAttack, fetchMonsterInterval, stage } = useActions()

	const cannotFetchMonster = stage === 0

	const maxAttackInterval = useMemo(() => monsterAttackSpeed / 1000, [monsterAttackSpeed])

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
		setIsAttacking(true)
		dispatch(setStartMonsterAttack(true))
		dispatch(setPlayerAttacking(true))
		hitMonster(playerAtk)

		setTimeout(() => {
			setIsAttacking(false)

			dispatch(setPlayerAttacking(false))
		}, 200)
	}, [dispatch, hitMonster, playerAtk])

	const checkMonsterIsDead = useCallback(() => {
		if (monsterData?.name && monsterHp <= 0) {
			dispatch(setMonsterIsDead(true))
			dispatch(setStartMonsterAttack(false))

			setTimeout(() => {
				dispatch(setHideMonster(true))
				setAttackInterval(0)
				dispatch(resetMonsterState())
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
		if (cannotFetchMonster) return
		const interval = setInterval(() => {
			if (fetchMonsterInterval === 0) {
				fetchMonsterData()
				clearInterval(interval)
			} else {
				dispatch(setFetchMonsterInterval(fetchMonsterInterval - 1))
			}
		}, 1000)

		return () => {
			clearInterval(interval)
		}
	}, [dispatch, fetchMonsterData, fetchMonsterInterval, cannotFetchMonster])

	useEffect(() => {
		checkMonsterIsDead()
	}, [checkMonsterIsDead])

	useEffect(() => {
		if (!startMonsterAttack) return

		const interval = setInterval(() => {
			if (attackInterval >= maxAttackInterval) hitPlayer()
			setAttackInterval(prev => prev + 0.25)
			if (attackInterval >= maxAttackInterval) setAttackInterval(0)
		}, 250)

		if (monsterIsDead || playerIsDead) clearInterval(interval)

		return () => {
			clearInterval(interval)
		}
	}, [attackInterval, hitPlayer, maxAttackInterval, monsterIsDead, playerIsDead, startMonsterAttack])

	useEffect(() => {
		if (hideMonster) {
			setAttackInterval(0)
		}
	}, [hideMonster])
	console.count('render monster')
	return (
		<>
			{fetchMonsterInterval > 0 && !cannotFetchMonster && (
				<S.FetchMonsterCountDownContainer alignItems='center' direction='column'>
					<Text>{fetchMonsterInterval} seconds until next monster...</Text>
					<Spinner thickness='6px' speed='0.6s' color='#fff' />
				</S.FetchMonsterCountDownContainer>
			)}
			{!isEmpty(monsterData) && !isEmpty(monsterType) && !hideMonster && (
				<S.MonsterContainer
					isdead={monsterIsDead.toString()}
					doattack={(!!monsterIsAttacking && !!startMonsterAttack && !monsterIsDead).toString()}
				>
					<S.MonsterTypeText monstertype={monsterType?.name} namecolor={monsterType?.color}>
						{monsterType?.name}
					</S.MonsterTypeText>
					<S.NameText monstertype={monsterType?.name} namecolor={monsterType?.color}>
						{monsterData?.name}
					</S.NameText>

					<S.HealthContainer>
						<S.HealthProgressBar
							monstertype={monsterType?.name}
							barcolor={monsterType?.color}
							borderRadius='5px'
							max={monsterMaxHp}
							value={monsterHp}
						/>
						<Flex w='100%' textAlign='center'>
							<S.HealthText>{numeric(monsterHp, 0)}</S.HealthText>
						</Flex>
					</S.HealthContainer>

					<S.MonterAttackCharger barcolor={monsterType?.color} startmonsterattack={startMonsterAttack.toString()}>
						<Progress max={maxAttackInterval} value={attackInterval} />
					</S.MonterAttackCharger>

					<S.MonsterImage
						isattacking={isAttacking.toString()}
						isdead={monsterIsDead.toString()}
						onClick={() => {
							if (!playerCanAttack || monsterHp <= 0 || playerIsDead) return
							playerAttack()
						}}
						draggable={false}
						src={monsterImage}
						alt='Monster'
					/>
				</S.MonsterContainer>
			)}
		</>
	)
}
