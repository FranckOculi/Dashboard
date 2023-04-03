import { useRoutes } from 'react-router-dom'

import { Providers } from '@/providers'

import { routes } from './router/routes'
import Layout from './pages/global/Layout'

function App() {
	const content = useRoutes(routes)

	return (
		<Providers>
			<Layout children={content} />
		</Providers>
	)
}

export default App
