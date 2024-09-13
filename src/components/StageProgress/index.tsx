import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Image } from '@chakra-ui/react'

import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useActions from '../../hooks/useActions'
import useMonster from '../../hooks/useMonsterStats'
import usePlayer from '../../hooks/usePlayerStats'
import { RootState } from '../../store'
import { setStage } from '../../store/reducers/actions'
import { resetMonsterState } from '../../store/reducers/monster'
import { selectEnabledStagesWorld1 } from '../../store/selectors/actions'
import { TOTAL_STAGES_WOLRD_1 } from '../../utils/constants'
import * as S from './styles'

export const StageProgress = () => {
	const { stage: currentStage, startMonsterAttack } = useActions()
	const { monsterIsDead } = useMonster()
	const { playerIsDead } = usePlayer()
	const { isfetchingMonster } = useActions()
	const enabledstagesWorld1 = useSelector((state: RootState) => selectEnabledStagesWorld1(state))
	const dispatch = useDispatch()

	const cannotChangeStage = useMemo(
		() => (startMonsterAttack && !monsterIsDead) || playerIsDead || isfetchingMonster,
		[startMonsterAttack, monsterIsDead, playerIsDead, isfetchingMonster]
	)

	const handleWrapStages = useCallback(
		(stageNumber: number) => {
			if (cannotChangeStage) return
			if (stageNumber > enabledstagesWorld1) return
			if (stageNumber === currentStage) return
			if (stageNumber === 0) {
				dispatch(resetMonsterState())
			}

			dispatch(setStage(stageNumber))
		},
		[cannotChangeStage, currentStage, dispatch, enabledstagesWorld1]
	)

	const stages = useMemo(
		() => [
			{
				id: 0,
				name: 'City',
				image: 'images/stages/icons/0.webp',
			},
			{
				id: 1,
				name: 'Stage 1',
				image: 'images/stages/icons/1.webp',
			},
			{
				id: 2,
				name: 'Stage 2',
				image: 'images/stages/icons/2.webp',
			},
			{
				id: 3,
				name: 'Stage 3',
				image: 'images/stages/icons/3.webp',
			},
			{
				id: 4,
				name: 'Stage 4',
				image: 'images/stages/icons/4.webp',
			},
			{
				id: 5,
				name: 'Stage 5',
				image: 'images/stages/icons/5.webp',
			},
			{
				id: 6,
				name: 'Stage 6',
				image: 'images/stages/icons/6.webp',
			},
		],
		[]
	)

	const GenerateStages = useCallback(() => {
		const stagesArray = new Array(TOTAL_STAGES_WOLRD_1).fill(1)

		const getCurrentStage = (stageNumber: number) => {
			switch (stageNumber) {
				case 0:
					const stage0 = stages?.[0]
					return {
						src: stage0.image,
						alt: stage0?.name,
					}
				case 1:
					const stage = stages?.[1]
					return {
						src: stage.image,
						alt: stage?.name,
					}
				case 10:
					const stage1 = stages?.[2]
					return {
						src: stage1.image,
						alt: stage1?.name,
					}
				case 20:
					const stage2 = stages?.[3]
					return {
						src: stage2.image,
						alt: stage2?.name,
					}
				case 30:
					const stage3 = stages?.[4]
					return {
						src: stage3.image,
						alt: stage3?.name,
					}
				case 40:
					const stage4 = stages?.[5]
					return {
						src: stage4.image,
						alt: stage4?.name,
					}
				case 50:
					const stage5 = stages?.[6]
					return {
						src: stage5.image,
						alt: stage5?.name,
					}
				default:
					break
			}
		}

		return stagesArray.map((_, index) => {
			const stageNumber = index

			const currStage = getCurrentStage(stageNumber)

			if (
				stageNumber === 0 ||
				stageNumber === 1 ||
				stageNumber === 10 ||
				stageNumber === 20 ||
				stageNumber === 30 ||
				stageNumber === 40 ||
				stageNumber === 50
			) {
				return (
					<Image
						filter={index > enabledstagesWorld1 ? 'grayscale(90%)' : ''}
						draggable={false}
						onClick={() => handleWrapStages(index)}
						key={index}
						border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
						src={currStage?.src}
						style={cannotChangeStage ? { cursor: 'not-allowed' } : {}}
						alt={currStage?.alt}
						borderRadius='full'
						boxSize='50px'
					/>
				)
			}

			return (
				<Flex key={index} onClick={() => handleWrapStages(index)} direction='column'>
					<S.StageNumber
						borderRadius='5px'
						px='3px'
						style={cannotChangeStage ? { cursor: 'not-allowed' } : {}}
						color={index < enabledstagesWorld1 ? '#7504f7' : ''}
						border={currentStage === stageNumber ? '1px solid #7504f7' : ''}
					>
						{stageNumber}
					</S.StageNumber>
				</Flex>
			)
		})
	}, [stages, cannotChangeStage, enabledstagesWorld1, currentStage, handleWrapStages])

	return (
		<S.StageProgressContainer>
			<S.ToggleStage allowToggle w='100%'>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Flex w='100%' textAlign='center' justifyContent='center' alignItems='center'>
								Stage Progress
							</Flex>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						<Flex alignItems='center' justifyContent='center'>
							{GenerateStages()}
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			</S.ToggleStage>
		</S.StageProgressContainer>
	)
}
