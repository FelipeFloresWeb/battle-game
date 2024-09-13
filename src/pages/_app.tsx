import { ChakraProvider } from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { store } from '../store'
import '../styles/global.css'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
	const { ToastContainer } = createStandaloneToast()

	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
				<ToastContainer />
			</ChakraProvider>
		</Provider>
	)
}
