import { Tooltip } from '@chakra-ui/react'
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
		<S.Container justifyContent={scene === 0 ? 'flex-end' : 'space-between'}>
			{scene === 0 && (
				<S.ToBattle
					onClick={() => changeScene(1)}
					draggable={false}
					boxSize='128px'
					margin='0 10px'
					objectFit='cover'
					src='images/ui/toBattle.webp'
					alt='HP_BAR'
				/>
			)}
			{scene > 0 && showMonsterLoot && (
				<>
					<Tooltip label='Back to the city...' borderRadius='8px' fontSize='md' hasArrow placement='top'>
						<S.BackToCity
							onClick={() => changeScene(0)}
							draggable={false}
							boxSize='128px'
							margin='0 10px'
							objectFit='cover'
							src='images/ui/backSign.webp'
							alt='HP_BAR'
						/>
					</Tooltip>
					<S.ToBattle
						onClick={() => changeScene(scene + 1)}
						draggable={false}
						boxSize='128px'
						margin='0 10px'
						objectFit='cover'
						src='images/ui/nextScene.webp'
						alt='HP_BAR'
					/>
				</>
			)}
		</S.Container>
	)
}
