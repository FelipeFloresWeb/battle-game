import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Image, Text } from '@chakra-ui/react'

import { useCallback, useMemo } from 'react'
import useActions from '../../hooks/useActions'
import * as S from './styles'

export const StageProgress = () => {
	const { stage: currentStage } = useActions()

	const TOTAL_STAGES_WOLRD_1 = 51

	const stages = useMemo(
		() => [
			{
				id: 0,
				name: 'City',
				image: 'images/stages/0.webp',
			},
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
		],
		[]
	)

	const GenerateStages = useCallback(() => {
		const stagesArray = new Array(TOTAL_STAGES_WOLRD_1).fill(1)

		return stagesArray.map((_, index) => {
			const stageNumber = index

			if (
				stageNumber === 0 ||
				stageNumber === 1 ||
				stageNumber === 10 ||
				stageNumber === 20 ||
				stageNumber === 30 ||
				stageNumber === 40 ||
				stageNumber === 50
			) {
				switch (stageNumber) {
					case 0:
						const stage0 = stages?.[0]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage0.image}
								alt={stage0?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					case 1:
						const stage = stages?.[1]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage.image}
								alt={stage?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					case 10:
						const stage1 = stages?.[2]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage1.image}
								alt={stage1?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					case 20:
						const stage2 = stages?.[3]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage2.image}
								alt={stage2?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					case 30:
						const stage3 = stages?.[4]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage3.image}
								alt={stage3?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					case 40:
						const stage4 = stages?.[5]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage4.image}
								alt={stage4?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					case 50:
						const stage5 = stages?.[6]
						return (
							<Image
								key={index}
								border={currentStage === stageNumber ? '3px solid #7504f7' : ''}
								src={stage5.image}
								alt={stage5?.name}
								borderRadius='full'
								boxSize='50px'
							/>
						)
					default:
						break
				}
			}

			return (
				<Flex key={index} direction='column'>
					<Text
						borderRadius='5px'
						px='3px'
						color={currentStage === stageNumber ? '#7504f7' : ''}
						border={currentStage === stageNumber ? '1px solid #7504f7' : ''}
					>
						{stageNumber}
					</Text>
				</Flex>
			)
		})
	}, [currentStage, stages])

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
