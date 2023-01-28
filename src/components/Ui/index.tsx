import { Button, Image } from '@chakra-ui/react'
import { get } from 'lodash'

import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useActions from '../../hooks/useActions'
import useMonster from '../../hooks/useMonsterStats'
import usePlayer from '../../hooks/usePlayerStats'
import { getMonster } from '../../services/api/monster'
import { setShowMonsterLoot } from '../../store/reducers/actions'
import {
	setLoadingMonsterData,
	setMonsterData,
	setMonsterIsAttacking,
	setMonsterType,
} from '../../store/reducers/monster'
import { setPlayerStats } from '../../store/reducers/player'
import { numeric } from '../../utils'
import * as S from './styles'

export const Ui = () => {
	const dispatch = useDispatch()
	const { monsterData, loadingMonsterType, loadingMonsterData, monsterAtk, monsterIsDead } = useMonster()
	const { playerHp, playerMaxHp, playerExp, playerMaxExp, playerGold, playerDiamond, playerStats } = usePlayer()
	const { startMonsterAttack } = useActions()

	const fetchMonsterData = useCallback(
		async (monsterId?: number) => {
			dispatch(setShowMonsterLoot(false))

			dispatch(setLoadingMonsterData(true))

			const fetchMonster = await getMonster(monsterId)
			const monsterType = get(fetchMonster, 'data.monsterType', {})
			const monsterData = get(fetchMonster, 'data.monster', {})

			dispatch(setMonsterType(monsterType))
			dispatch(setMonsterData(monsterData))

			dispatch(setLoadingMonsterData(false))
		},
		[dispatch]
	)

	const hitPlayer = useCallback(() => {
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
		if (monsterIsDead || !startMonsterAttack) return
		const attack = setInterval(() => {
			hitPlayer()
		}, 5000)

		monsterIsDead && clearInterval(attack)

		return () => {
			clearInterval(attack)
		}
	}, [hitPlayer, monsterIsDead, startMonsterAttack])

	return (
		<S.UiContainer w='100%' justifyContent='space-between' direction='row'>
			<S.UiBar height='100%'>
				<Image
					draggable={false}
					boxSize='fit-content'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/HP_BAR.png'
					alt='HP_BAR'
				/>
				<S.ProgressContainer>
					<S.HpProgressBar borderEndRadius='5px' max={playerMaxHp} value={playerHp} />
				</S.ProgressContainer>
				<S.HpText>{playerHp + ' / ' + playerMaxHp}</S.HpText>
			</S.UiBar>

			<S.UiBar>
				<Image
					draggable={false}
					boxSize='fit-content'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/EXP_BAR.png'
					alt='EXP_BAR'
				/>
				<S.ProgressContainer>
					<S.ExpProgressBar borderEndRadius='5px' max={playerMaxExp} value={playerExp} />
				</S.ProgressContainer>
				<S.ExpText>{`${playerExp} / ${playerMaxExp}`}</S.ExpText>
			</S.UiBar>

			<S.UiBar>
				<Image
					draggable={false}
					boxSize='fit-content'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/GOLD_BAR.png'
					alt='GOLD_BAR'
				/>
				<S.GoldContainer>
					<S.GoldProgressBar borderEndRadius='5px' value={100} />
				</S.GoldContainer>
				<S.GoldText>
					<div>{numeric(playerGold, 0)}</div>
				</S.GoldText>
			</S.UiBar>

			<S.UiBar>
				<Image
					draggable={false}
					boxSize='fit-content'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/DIAMOND_BAR.png'
					alt='DIAMOND_BAR'
				/>
				<S.DiamondContainer>
					<S.DiamondProgressBar borderEndRadius='5px' value={100} />
				</S.DiamondContainer>
				<S.DiamondText>
					<div>{numeric(playerDiamond, 0)}</div>
				</S.DiamondText>
			</S.UiBar>

			<Button
				isDisabled={loadingMonsterType || loadingMonsterData}
				onClick={() => fetchMonsterData(monsterData?.index)}
			>
				Refetch MonsterType
			</Button>
			<Button isDisabled={loadingMonsterType || loadingMonsterData} onClick={() => fetchMonsterData()}>
				Get Monster
			</Button>
		</S.UiContainer>
	)
}
