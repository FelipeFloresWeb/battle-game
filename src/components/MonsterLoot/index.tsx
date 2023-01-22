import { Flex, Image } from '@chakra-ui/react'
import useActions from '../../hooks/useActions'
import useMonster from '../../hooks/useMonsterStats'
import * as S from './styles'

export const MonsterLoot = () => {
	const { showMonsterLoot } = useActions()
	const { monsterGold, monsterExp } = useMonster()
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

					<h1>Diamond Drop</h1>
				</S.Container>
			)}
		</>
	)
}
