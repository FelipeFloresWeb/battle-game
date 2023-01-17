import type { NextApiRequest, NextApiResponse } from 'next'
import { selectMonsterType } from './methods'
import monsters from './monsterData.json'
import { Error, IMonster, IMonsterData, MonsterData } from './types'

export default function handler(req: NextApiRequest, res: NextApiResponse<IMonsterData | Error>) {
	if (req.method !== 'POST') return res.status(400).json({ message: 'Method not allowed' })

	const montersObj: IMonster = monsters
	const monstersLength = Object.keys(montersObj).length

	const monsterType = selectMonsterType()

	const randomMonsterIndex = Math.floor(Math.random() * monstersLength) + 1

	let monster: MonsterData

	if (req?.body?.monsterId) {
		monster = montersObj[req.body.monsterId]
	} else {
		monster = montersObj[randomMonsterIndex]
	}

	monster = {
		...monster,
		stats: {
			...monster.stats,
			maxHp: Math.floor(monster.stats.maxHp * monsterType.statsMultiplier),
			hp: Math.floor(monster.stats.hp * monsterType.statsMultiplier),
			attack: Math.floor(monster.stats.attack * monsterType.statsMultiplier),
			defense: Math.floor(monster.stats.defense * monsterType.statsMultiplier),
		},
		loot: {
			...monster.loot,
			minGold: Math.floor(monster.loot.minGold * monsterType.lootMultiplier),
			maxGold: Math.floor(monster.loot.maxGold * monsterType.lootMultiplier),
			exp: Math.floor(monster.loot.exp * monsterType.lootMultiplier),
		},
	}

	return res.status(200).json({ data: { monster, monsterType } })
}
