import { Button, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { getMonsterType } from '../../services/api/monster'
import { numeric } from '../../utils'
import * as S from './styles'

export const Ui = () => {
	const [canFetch, setCanFetch] = useState(false)
	const PLAYER_HP = 7800
	const MAX_PLAYER_HP = 10000

	const PLAYER_EXP = 500
	const MAX_PLAYER_EXP = 1000
	const EXP_NEEDED = MAX_PLAYER_EXP - PLAYER_EXP

	const PLAYER_GOLD = 2000000
	const PLAYER_DIAMOND = 10000

	// const { monsterType, loading } = useMonsterType(canFetch)

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

			<Button onClick={() => getMonsterType()}>Refetch MonsterType</Button>
		</S.UiContainer>
	)
}
