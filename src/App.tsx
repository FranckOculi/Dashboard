import { useRoutes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import { Providers } from '@/providers'

import Layout from './pages/global/Layout'

function App() {
	return (
		<BrowserRouter>
			<Providers>
				<Layout />
			</Providers>
		</BrowserRouter>
	)
}

export default App
