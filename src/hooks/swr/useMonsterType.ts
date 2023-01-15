import axios from 'axios'
import get from 'lodash/get'
import useSWR, { SWRConfiguration } from 'swr'

const defaultOpt: SWRConfiguration = {
	shouldRetryOnError: false,
	revalidateOnFocus: false,
}

const fetcher = (url: string) => axios.post(url).then(res => res.data)

const useMonsterType = (canfetch: boolean) => {
	const { data, error } = useSWR(canfetch ? '/api/monster/type' : null, fetcher, defaultOpt)

	const monsterType = get(data, 'data', {})

	return {
		monsterType,
		loading: !error && !data,
		error: error,
	}
}

export default useMonsterType
