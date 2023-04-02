import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import { Providers } from '@/providers'

import { routes } from './router/routes'
import Layout from './pages/global/Layout'

function App() {
	const content = useRoutes(routes)

	return (
		<BrowserRouter>
			<Providers>
				<Layout children={content} />
			</Providers>
		</BrowserRouter>
	)
}

export default App
