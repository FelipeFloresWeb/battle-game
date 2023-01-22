import { Flex, Image } from '@chakra-ui/react'
import useActions from '../../hooks/useActions'
import useMonster from '../../hooks/useMonsterStats'
import * as S from './styles'

export const MonsterLoot = () => {
	const { showMonsterLoot } = useActions()
	const { monsterGold, monsterExp, monsterDiamond } = useMonster()
	return (
		<>
			{showMonsterLoot && (
				<S.Container>
					<Flex>
						<Image src='images/loot/exp.png' alt='start' w='64px' draggable={false} objectFit='cover' />
						<p>+{monsterExp}</p>
					</Flex>
					<Flex>
						<Image src='images/loot/gold.png' alt='start' w='64px' draggable={false} objectFit='cover' />
						<p>+{monsterGold}</p>
					</Flex>

					<Flex>
						<Image src='images/loot/diamond.png' alt='start' w='64px' draggable={false} objectFit='cover' />
						<p>+{monsterDiamond}</p>
					</Flex>
				</S.Container>
			)}
		</>
	)
}
