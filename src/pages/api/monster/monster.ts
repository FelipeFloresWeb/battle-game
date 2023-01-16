import type { NextApiRequest, NextApiResponse } from 'next'
import monsters from './monsterData.json'

type Data = {
	data: MonsterData
}

type Error = {
	message: string
}

export type MonsterData = {
	index: number
	name: string
	stats: MonsterStats
	loot: MonsterLoot
}

export type MonsterStats = {
	maxHp: number
	hp: number
	attack: number
	defense: number
	attackSpeed: number
}

export type MonsterLoot = {
	minGold: number
	maxGold: number
	exp: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
	if (req.method === 'POST') {
		const monstersLength = Object.keys(monsters).length
		const randomMonster = Math.floor(Math.random() * monstersLength) + 1

		const monster = monsters[randomMonster]

		return res.status(200).json({ data: monster })
	} else {
		res.status(400).json({ message: 'Method not allowed' })
	}
}
