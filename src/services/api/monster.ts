import { monsterApi } from '.'

export const getMonsterType = async () => {
	try {
		const res = await monsterApi.post('/type')
		return res.data
	} catch (error: any) {
		return error
	}
}

export const getMonsterData = async () => {
	try {
		const res = await monsterApi.post('/monster')
		return res.data
	} catch (error: any) {
		return error
	}
}
