import { Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import useActions from '../../hooks/useActions'
import { setCenario, setShowMonsterLoot } from '../../store/reducers/actions'
import * as S from './styles'

export const ChangeScene = () => {
	const dispatch = useDispatch()

	const { scene, showMonsterLoot } = useActions()

	const changeScene = (number: number) => {
		dispatch(setShowMonsterLoot(false))
		dispatch(setCenario(number))
	}

	return (
		<S.Container>
			{scene === 0 && (
				<S.ToBattle
					onClick={() => changeScene(1)}
					draggable={false}
					boxSize='64px'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/toBattle.png'
					alt='HP_BAR'
				/>
			)}
			{scene > 0 && showMonsterLoot && <Text onClick={() => changeScene(scene + 1)}>Next</Text>}
			{scene > 0 && showMonsterLoot && <Text onClick={() => changeScene(0)}>Back to City</Text>}
		</S.Container>
	)
}
