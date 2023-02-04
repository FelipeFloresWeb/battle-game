import { Image } from '@chakra-ui/react'
import { get } from 'lodash'

import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useMonster from '../../hooks/useMonsterStats'
import usePlayer from '../../hooks/usePlayerStats'
import { getMonster } from '../../services/api/monster'
import { setShowMonsterLoot } from '../../store/reducers/actions'
import { setLoadingMonsterData, setMonsterData, setMonsterType } from '../../store/reducers/monster'
import * as S from './styles'

export const StageProgress = () => {
	const dispatch = useDispatch()
	const { monsterData, loadingMonsterType, loadingMonsterData } = useMonster()
	const { playerHp, playerMaxHp, playerExp, playerMaxExp, playerGold, playerDiamond } = usePlayer()

	const TOTAL_STAGES_WOLRD_1 = 50

	const stages = [
		{
			id: 1,
			name: 'Stage 1',
			image: 'images/stages/1.webp',
		},
		{
			id: 2,
			name: 'Stage 2',
			image: 'images/stages/2.webp',
		},
		{
			id: 3,
			name: 'Stage 3',
			image: 'images/stages/3.webp',
		},
		{
			id: 4,
			name: 'Stage 4',
			image: 'images/stages/4.webp',
		},
		{
			id: 5,
			name: 'Stage 5',
			image: 'images/stages/5.webp',
		},
		{
			id: 6,
			name: 'Stage 6',
			image: 'images/stages/6.webp',
		},
	]

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

	const generateStages = () => {
		const stagesArray = new Array(TOTAL_STAGES_WOLRD_1).fill(1)
		const stagesWithMonster = [1, 20, 30, 40, 50]
		const stagesWithBoss = [10, 20, 30, 40, 50]
		const stagesWithChest = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

		return stagesArray.map((_, index) => {
			const stageNumber = index + 1
			const stage = stages?.[index]
			// if (stagesWithMonster.includes(stageNumber)) {
			//     return (
			//         <Image
			//             key={index}
			//             src='images/monsters/1.webp'
			//             alt='monster'
			//             borderRadius='full'
			//             boxSize='50px'
			//             onClick={() => fetchMonsterData(stageNumber)}
			//         />
			//     )
			// }

			// if (stagesWithBoss.includes(stageNumber)) {
			//     return (
			//         <Image
			//             key={index}
			//             src='images/monsters/1.webp'
			//             alt='monster'
			//             borderRadius='full'
			//             boxSize='50px'
			//             onClick={() => fetchMonsterData(stageNumber)}
			//         />
			//     )
			// }

			// if (stagesWithChest.includes(stageNumber)) {
			//     return (
			//         <Image
			//             key={index}
			//             src='images/chest.webp'
			//             alt='chest'
			//             borderRadius='full'
			//             boxSize='50px'
			//             onClick={() => fetchMonsterData(stageNumber)}
			//         />
			//     )
			// }
			if (
				stageNumber === 1 ||
				stageNumber === 10 ||
				stageNumber === 20 ||
				stageNumber === 30 ||
				stageNumber === 40 ||
				stageNumber === 50
			) {
				switch (stageNumber) {
					case 1:
						const stage = stages?.[0]
						return <Image key={index} src={stage.image} alt={stage?.name} borderRadius='full' boxSize='50px' />
					case 10:
						const stage1 = stages?.[1]
						return <Image key={index} src={stage1.image} alt={stage1?.name} borderRadius='full' boxSize='50px' />
					case 20:
						const stage2 = stages?.[2]
						return <Image key={index} src={stage2.image} alt={stage2?.name} borderRadius='full' boxSize='50px' />
					case 30:
						const stage3 = stages?.[3]
						return <Image key={index} src={stage3.image} alt={stage3?.name} borderRadius='full' boxSize='50px' />
					case 40:
						const stage4 = stages?.[4]
						return <Image key={index} src={stage4.image} alt={stage4?.name} borderRadius='full' boxSize='50px' />
					case 50:
						const stage5 = stages?.[5]
						return <Image key={index} src={stage5.image} alt={stage5?.name} borderRadius='full' boxSize='50px' />
					default:
						break
				}
			}

			return (
				<Image
					key={index}
					objectFit='cover'
					src='images/swords/2.webp'
					alt='banner'
					borderRadius='full'
					boxSize='28px'
				/>
			)
		})
	}

	return <S.StageProgressContainer alignItems='center'>{generateStages()}</S.StageProgressContainer>
}
