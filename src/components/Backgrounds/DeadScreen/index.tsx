import { Flex, Image, Text, Tooltip } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { MdHolidayVillage } from 'react-icons/md'
import { VscDebugRestart } from 'react-icons/vsc'
import { useDispatch } from 'react-redux'
import useMonster from '../../../hooks/useMonsterStats'
import usePlayer from '../../../hooks/usePlayerStats'
import { setCenario, setStage } from '../../../store/reducers/actions'
import { resetMonsterState } from '../../../store/reducers/monster'
import { setPlayerIsDead, setPlayerItems, setPlayerStats } from '../../../store/reducers/player'
import { numeric } from '../../../utils'
import * as S from './styles'

export const DeadScreen = () => {
	const [disableRestartButton, setDisableRestartButton] = useState(true)
	const [timeToRestart, setTimeToRestart] = useState(3)
	const [increaseRespawnPriceFactor, setIncreaseRespawnPriceFactor] = useState(1)
	const [showInsuficientsDiamondsMessage, setShowInsuficientsDiamondsMessage] = useState(false)

	const { playerIsDead, playerStats } = usePlayer()
	const { monsterData, monsterType, monsterIsDead } = useMonster()
	const { experienceLost, playerGoldLost, playerItems, playerDiamond } = usePlayer()

	const MULTIPLIER_RESPAWN_VIP_FACTOR = 1.3
	const RESPAWN_VIP_PRICE = useMemo(() => Math.round(100 * increaseRespawnPriceFactor), [increaseRespawnPriceFactor])

	const dispatch = useDispatch()

	const respawnPlayer = useCallback(() => {
		setIncreaseRespawnPriceFactor(1)
		setShowInsuficientsDiamondsMessage(false)

		dispatch(
			setPlayerStats({
				...playerStats,
				health: playerStats.maxHealth,
				exp: playerStats.exp - experienceLost,
			})
		)
		dispatch(
			setPlayerItems({
				...playerItems,
				gold: playerItems.gold - playerGoldLost,
			})
		)

		dispatch(setCenario(0))
		dispatch(setStage(0))
		dispatch(setPlayerIsDead(false))
		dispatch(resetMonsterState())
	}, [dispatch, experienceLost, playerGoldLost, playerItems, playerStats])

	const respawnPlayerVip = useCallback(() => {
		if (playerDiamond < RESPAWN_VIP_PRICE) {
			setShowInsuficientsDiamondsMessage(true)
		} else {
			setShowInsuficientsDiamondsMessage(false)

			setIncreaseRespawnPriceFactor(prev => prev * MULTIPLIER_RESPAWN_VIP_FACTOR)

			dispatch(
				setPlayerStats({
					...playerStats,
					health: playerStats.maxHealth,
				})
			)

			dispatch(
				setPlayerItems({
					...playerItems,
					diamond: playerItems.diamond - RESPAWN_VIP_PRICE,
				})
			)

			dispatch(setPlayerIsDead(false))
		}
	}, [RESPAWN_VIP_PRICE, dispatch, playerDiamond, playerItems, playerStats])

	useEffect(() => {
		if (!playerIsDead) return
		setTimeout(() => {
			setDisableRestartButton(false)
		}, 3000)

		return () => {
			setDisableRestartButton(true)
		}
	}, [playerIsDead])

	useEffect(() => {
		if (!playerIsDead) return
		const interval = setInterval(() => {
			setTimeToRestart(prev => prev - 1)
		}, 1000)

		return () => {
			clearInterval(interval)
			setTimeToRestart(3)
		}
	}, [playerIsDead])

	useEffect(() => {
		if (monsterIsDead) {
			setIncreaseRespawnPriceFactor(1)
		}
	}, [monsterIsDead])

	return playerIsDead ? (
		<>
			<S.Container />
			<S.TextContainer>
				<S.DeadText>You are dead!</S.DeadText>
				<S.MonsterDataText montertypecolor={monsterType?.color}>
					A <span>{monsterType?.name}</span> <span>{monsterData?.name}</span> has killed you
				</S.MonsterDataText>
				<S.PlayerLooseText>
					You lose <span>{experienceLost}</span> experience points and <span>{playerGoldLost}</span> gold coin
					{playerGoldLost > 1 && 's'}
				</S.PlayerLooseText>
				{showInsuficientsDiamondsMessage && (
					<>
						<S.InsuficientDiamondsText>You dont have enough diamonds</S.InsuficientDiamondsText>
						<S.InsuficientDiamondsText>{` You need ${numeric(
							RESPAWN_VIP_PRICE,
							0
						)} diamonds to use VIP Respawn`}</S.InsuficientDiamondsText>
					</>
				)}
				<Flex w='100%' justifyContent='center' mt='20px'>
					{timeToRestart > 0 ? (
						<S.TimerText>{timeToRestart}</S.TimerText>
					) : (
						<Flex w='70%' justifyContent='space-between'>
							<Tooltip label='Lose experience, gold and back to town...' hasArrow placement='top'>
								<S.RestartButton mt='20px' disabled={disableRestartButton} onClick={respawnPlayer}>
									<Flex alignItems='center'>
										<Text mr='3px'>Restart </Text>
										<MdHolidayVillage />
									</Flex>
								</S.RestartButton>
							</Tooltip>
							<Tooltip label={`Get your life back and try again at the point before you die!`} hasArrow placement='top'>
								<S.RestartButton mt='20px' disabled={disableRestartButton} onClick={respawnPlayerVip}>
									<Flex mb='3px' alignItems='center'>
										<Text mr='3px'>VIP Respawn</Text> <VscDebugRestart />
									</Flex>
									<Flex alignItems='center'>
										<p>{numeric(RESPAWN_VIP_PRICE, 0)}</p>
										<Image ml='3px' src='/images/loot/diamond.png' w='20px' h='20px' alt='diamond' />
									</Flex>
								</S.RestartButton>
							</Tooltip>
						</Flex>
					)}
				</Flex>
			</S.TextContainer>
		</>
	) : (
		<></>
	)
}
