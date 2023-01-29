import useMonster from '../../../hooks/useMonsterStats'
import usePlayer from '../../../hooks/usePlayerStats'
import * as S from './styles'

export const DeadScreen = () => {
	const { playerIsDead } = usePlayer()
	const { monsterData, monsterType } = useMonster()
	const { experienceLost, playerGoldLost } = usePlayer()

	return playerIsDead ? (
		<>
			<S.Container></S.Container>
			<S.TextContainer>
				<S.DeadText>You are dead!</S.DeadText>
				<S.MonsterDataText montertypecolor={monsterType?.color}>
					A <span>{monsterType?.name}</span> <span>{monsterData?.name}</span> has killed you
				</S.MonsterDataText>
				<S.PlayerLooseText>
					You lose <span>{experienceLost}</span> experience points and <span>{playerGoldLost}</span> gold coin
					{playerGoldLost > 1 && 's'}
				</S.PlayerLooseText>
			</S.TextContainer>
		</>
	) : (
		<></>
	)
}
