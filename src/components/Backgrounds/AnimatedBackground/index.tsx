import { useSelector } from 'react-redux'
import { MonsterType } from '../../../pages/api/monster/types'
import { selectMonsterType } from '../../../store/selectors/monster'
import * as S from './styles'

export const AnimatedBackground = () => {
	const monsterType: MonsterType = useSelector((state: any) => selectMonsterType(state))

	return (
		<>
			{monsterType?.name === 'Legendary' || monsterType?.name === 'Divine' || monsterType.name === 'Mythical' ? (
				<S.AnimatedBackgroundContainer montertype={monsterType?.name} namecolor={monsterType?.color} />
			) : (
				<></>
			)}
		</>
	)
}
