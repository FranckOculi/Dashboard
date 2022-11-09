import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useRoutes } from 'react-router-dom'

import { routes } from './router/routes'
import Layout from './pages/global/Layout'

function App() {
	const [theme, colorMode] = useMode()
	const content = useRoutes(routes)

	return <Layout children={content} />
	{
		/* <ColorModeContext.Provider value={colorMode}>
			 <ThemeProvider theme={theme}> 
				 <CssBaseline /> 
			</ThemeProvider> 
		</ColorModeContext.Provider>*/
	}
}

export default App
