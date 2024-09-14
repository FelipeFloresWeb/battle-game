import { Flex, Image } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { BsPercent } from 'react-icons/bs'
import { AiOutlineFieldNumber, AiOutlineFieldString } from 'react-icons/ai'

import usePlayer from '../../hooks/usePlayerStats'
import { numeric, shortNumer } from '../../utils'
import { CustomTooltip } from '../Tooltip'
import * as S from './styles'
import { SHOW_HP_METHOD } from '../../lib/constants'

export const Ui = () => {
	const { playerHp, playerMaxHp, playerExp, playerMaxExp, playerGold, playerDiamond, playerHpPercent } = usePlayer()
	const [showHpMethod, setShowHpMethod] = useState<'default' | 'percent' | 'short'>('default')

	const toggleShowHpMethod = useCallback(() => {
		if (showHpMethod === 'default') {
			setShowHpMethod('short')
			window.localStorage.setItem(SHOW_HP_METHOD, 'short')
		} else if (showHpMethod === 'short') {
			setShowHpMethod('percent')
			window.localStorage.setItem(SHOW_HP_METHOD, 'percent')
		} else {
			setShowHpMethod('default')
			window.localStorage.setItem(SHOW_HP_METHOD, 'default')
		}
	}, [showHpMethod])

	const hpText = useMemo(() => {
		if (showHpMethod === 'default') {
			return numeric(playerHp)
		} else if (showHpMethod === 'short') {
			return shortNumer(playerHp)
		} else {
			return playerHpPercent + '%'
		}
	}, [playerHp, playerHpPercent, showHpMethod])

	useEffect(() => {
		const getShowHpMethod = window.localStorage.getItem(SHOW_HP_METHOD) || 'default'

		window.localStorage.setItem(SHOW_HP_METHOD, getShowHpMethod)
		setShowHpMethod(getShowHpMethod as 'default' | 'percent' | 'short')
	}, [])

	return (
		<Flex>
			<S.UiContainer p='0 50px' justifyContent='space-between' direction='row'>
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
						<S.ToggleShowHpText onClick={toggleShowHpMethod}>
							{showHpMethod === 'default' && <AiOutlineFieldString />}
							{showHpMethod === 'short' && <BsPercent />}
							{showHpMethod === 'percent' && <AiOutlineFieldNumber />}
						</S.ToggleShowHpText>
					</S.ProgressContainer>
					<Flex>
						<CustomTooltip label={`${playerHp}/${playerMaxHp}`} Children={<S.HpText>{hpText}</S.HpText>} />
					</Flex>
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
					<S.ExpText>{`${numeric(playerExp)} / ${numeric(playerMaxExp)}`}</S.ExpText>
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
						<div>{numeric(playerGold)}</div>
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
						<div>{numeric(playerDiamond)}</div>
					</S.DiamondText>
				</S.UiBar>
			</S.UiContainer>
			{/* <Button
				isDisabled={loadingMonsterType || loadingMonsterData}
				onClick={() => fetchMonsterData(monsterData?.index)}
			>
				Refetch MonsterType
			</Button>
			<Button isDisabled={loadingMonsterType || loadingMonsterData} onClick={() => fetchMonsterData()}>
				Get Monster
			</Button> */}
		</Flex>
	)
}
