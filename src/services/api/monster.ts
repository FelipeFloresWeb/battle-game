import { monsterApi } from '.'

export const getMonsterType = async () => {
	try {
		const res = await monsterApi.post('/type')
		return res.data
	} catch (error: any) {
		return error
	}
}
