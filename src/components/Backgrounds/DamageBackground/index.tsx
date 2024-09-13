import { useSelector } from 'react-redux'
import { selectMonsterIsAttacking } from '../../../store/selectors/monster'
import * as S from './styles'

export const DamageBackground = () => {
	const monsterIsAttacking = useSelector((state: any) => selectMonsterIsAttacking(state))

	return monsterIsAttacking ? <S.Container /> : <></>
}
