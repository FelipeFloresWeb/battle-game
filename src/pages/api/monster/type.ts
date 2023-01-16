import type { NextApiRequest, NextApiResponse } from 'next'
import types from './monsterPercentTable.json'

type Data = {
	data: MonsterType
}

type Error = {
	message: string
}

export type MonsterType = {
	name: string
	color: string
	percent: number
	statsMultiplier: number
	lootMultiplier: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
	if (req.method === 'POST') {
		const randomNum = Math.random() * 101

		const percent = Number(randomNum.toFixed(2))

		const getType = function (): MonsterType {
			if (percent <= types.uncommon.percent && percent > types.rare.percent) {
				return types.uncommon
			}
			if (percent <= types.rare.percent && percent > types.epic.percent) {
				return types.rare
			}
			if (percent <= types.epic.percent && percent > types.legendary.percent) {
				return types.epic
			}
			if (percent <= types.legendary.percent && percent > types.mythical.percent) {
				return types.legendary
			}
			if (percent <= types.mythical.percent && percent >= 0) {
				return types.mythical
			}
			return types.common
		}

		const monsterType = getType()

		return res.status(200).json({ data: monsterType })
	} else {
		res.status(400).json({ message: 'Method not allowed' })
	}
}
