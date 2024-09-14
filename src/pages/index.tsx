import { Flex } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { AnimatedBackground } from '../components/Backgrounds/AnimatedBackground'

import { DamageBackground } from '../components/Backgrounds/DamageBackground'
import { DeadScreen } from '../components/Backgrounds/DeadScreen'
import { Cursor } from '../components/Cursor'
import { GameWindow } from '../components/GameWindow'
import { Header } from '../components/Header'
import { LinksReferers } from '../components/LinksReferers'
import { StageProgress } from '../components/StageProgress'
import { Ui } from '../components/Ui'

const inter = Inter({ subsets: ['latin'] })

const AdditionalComponents = () => {
	return (
		<>
			<Header />
			<StageProgress />
			<GameWindow />
			<Cursor />
		</>
	)
}

const Backgrounds = () => {
	return (
		<>
			<Ui />
			<DeadScreen />
			<AnimatedBackground />
			<DamageBackground />
			<LinksReferers />
		</>
	)
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Battle Game | Be the Strongest One</title>
				<meta name='description' content='Be the Strongest One' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Flex direction='column'>
				<AdditionalComponents />

				<Backgrounds />
			</Flex>
		</>
	)
}
