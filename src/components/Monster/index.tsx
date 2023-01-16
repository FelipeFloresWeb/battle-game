import { Flex } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMonsterType } from '../../store/selectors/monster'
import { selectPlayerCanAttack } from '../../store/selectors/player'

import { numeric } from '../../utils'
import * as S from './styles'

export const Monster = () => {
	const [isAttacking, setIsAttacking] = useState(false)
	const [monsterAttacking, setMonsterAttacking] = useState(false)

	const monsterType = useSelector((state: any) => selectMonsterType(state))
	const playerCanAttack = useSelector((state: any) => selectPlayerCanAttack(state))

	const monsterName = 'Kamy'
	const monsterHealth = 750
	const monsterMaxHealth = 1000

	const playerAttack = useCallback(() => {
		if (!playerCanAttack) return
		setIsAttacking(true)

		setTimeout(() => {
			setIsAttacking(false)
		}, 200)
	}, [playerCanAttack])

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

	return (
		<S.MonsterContainer monsterattacking={monsterAttacking.toString()}>
			<S.NameText>{monsterName}</S.NameText>

			<S.HealthContainer>
				<S.HealthProgressBar borderRadius='5px' max={monsterMaxHealth} value={monsterHealth} />
				<Flex w='100%' textAlign='center'>
					<S.HealthText>{numeric(monsterHealth, 0)}</S.HealthText>
				</Flex>
			</S.HealthContainer>
			<S.MonsterImage
				isattacking={isAttacking.toString()}
				onClick={playerAttack}
				draggable={false}
				src='images/monsters/stage1/9.png'
				alt='Monster'
			/>
		</S.MonsterContainer>
	)
}
