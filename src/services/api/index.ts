import axios from 'axios'

// const interceptor = async (config: AxiosRequestConfig) => {
// 	const session = await getSession()
// 	const SUPER = !!session?.roles?.includes('nft_admin')

// 	const IMPERSONATE = SUPER ? localStorage.getItem('impersonate-id') : null

// 	if (session?.accessToken) {
// 		config.headers = IMPERSONATE
// 			? {
// 					...config.headers,
// 					authorization: `bearer ${session?.accessToken}`,
// 					'Authorization-ImpersonateUserId': IMPERSONATE,
// 			  }
// 			: {
// 					...config.headers,
// 					authorization: `bearer ${session?.accessToken}`,
// 			  }
// 	}
// 	return config
// }
// const _interceptor = async (config: AxiosRequestConfig) => {
// 	const session = await getSession()

// 	if (session?.accessToken) {
// 		config.headers = {
// 			...config.headers,
// 			authorization: `${session?.accessToken}`,
// 		}
// 	}
// 	return config
// }

// const bearerInterceptor = async (config: AxiosRequestConfig) => {
// 	const session = await getSession()

// 	if (session?.accessToken) {
// 		config.headers = {
// 			...config.headers,
// 			authorization: `Bearer ${session?.accessToken}`,
// 		}
// 	}
// 	return config
// }

export const monsterApi = axios.create({ baseURL: '/api/monster' })

// monsterApi.interceptors.request.use(interceptor, error => Promise.reject(error))
