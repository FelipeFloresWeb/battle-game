import { Button, Image } from '@chakra-ui/react'
import { get } from 'lodash'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MonsterData } from '../../pages/api/monster/types'
import { getMonster } from '../../services/api/monster'
import { setLoadingMonsterData, setMonsterData, setMonsterType } from '../../store/reducers/monster'
import { IMonsterState } from '../../store/reducers/types'
import { selectLoadingMonsterData, selectLoadingMonsterType, selectMonsterData } from '../../store/selectors/monster'
import { numeric } from '../../utils'
import * as S from './styles'

export const Ui = () => {
	const dispatch = useDispatch()
	const loadingMonsterType = useSelector((state: any) => selectLoadingMonsterType(state))
	const loadingMonsterData = useSelector((state: any) => selectLoadingMonsterData(state))
	const monsterData: MonsterData = useSelector((state: IMonsterState) => selectMonsterData(state))

	const PLAYER_HP = 7800
	const MAX_PLAYER_HP = 10000

	const PLAYER_EXP = 500
	const MAX_PLAYER_EXP = 1000
	const EXP_NEEDED = MAX_PLAYER_EXP - PLAYER_EXP

	const PLAYER_GOLD = 2000000
	const PLAYER_DIAMOND = 10000

	const fetchMonsterData = useCallback(
		async (monsterId?: number) => {
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
					<S.HpProgressBar borderEndRadius='5px' max={MAX_PLAYER_HP} value={PLAYER_HP} />
				</S.ProgressContainer>
				<S.HpText>{PLAYER_HP + ' / ' + MAX_PLAYER_HP}</S.HpText>
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
					<S.ExpProgressBar borderEndRadius='5px' max={MAX_PLAYER_EXP} value={PLAYER_EXP} />
				</S.ProgressContainer>
				<S.ExpText>{PLAYER_EXP + ' / ' + MAX_PLAYER_EXP}</S.ExpText>
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
					<div>{numeric(PLAYER_GOLD, 0)}</div>
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
					<div>{numeric(PLAYER_DIAMOND, 0)}</div>
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
