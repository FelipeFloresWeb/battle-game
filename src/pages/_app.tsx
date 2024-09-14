import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'

import { store } from '../store'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/global.css'
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
				<ToastContainer />
			</ChakraProvider>
		</Provider>
	)
}
