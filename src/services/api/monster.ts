import { monsterApi } from '.'

export const getMonster = async (monsterId?: number) => {
	try {
		const res = await monsterApi.post('/monster', { monsterId })
		return res.data
	} catch (error: any) {
		return error
	}
}
