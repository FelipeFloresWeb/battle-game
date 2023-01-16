import { Flex } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MonsterData } from '../../pages/api/monster/monster'
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

	const monsterType = useSelector((state: any) => selectMonsterType(state))
	const monsterData: MonsterData = useSelector((state: IMonsterState) => selectMonsterData(state))
	const monsterImage: string = useSelector((state: any) => selectMonsterImage(state))
	const monsterIsDead = useSelector((state: IMonsterState) => selectMonsterIsDead(state))
	const playerCanAttack = useSelector((state: any) => selectPlayerCanAttack(state))

	const playerAttack = useCallback(() => {
		if (!playerCanAttack || monsterData?.stats?.hp <= 0) return
		setIsAttacking(true)
		dispatch(setMonsterData({ ...monsterData, stats: { ...monsterData?.stats, hp: monsterData?.stats?.hp - 500 } }))

		setTimeout(() => {
			setIsAttacking(false)
		}, 200)
	}, [dispatch, monsterData, playerCanAttack])

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
		if (monsterData?.stats?.hp <= 0) {
			dispatch(
				setMonsterData({
					...monsterData,
					stats: { ...monsterData?.stats, hp: 0 },
				})
			)
			dispatch(setMonsterIsDead(true))
			return
		}
		dispatch(setMonsterIsDead(false))
	}, [dispatch, monsterData])

	return (
		<S.MonsterContainer isdead={monsterIsDead.toString()} monsterattacking={monsterAttacking.toString()}>
			<S.NameText>{monsterData?.name}</S.NameText>

			<S.HealthContainer>
				<S.HealthProgressBar borderRadius='5px' max={monsterData?.stats?.maxHp} value={monsterData?.stats?.hp} />
				<Flex w='100%' textAlign='center'>
					<S.HealthText>{numeric(monsterData?.stats?.hp, 0)}</S.HealthText>
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
