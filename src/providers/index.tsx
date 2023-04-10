import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AuthProvider } from './auth/AuthContext'

const Providers: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
	const queryClient = new QueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>{children}</AuthProvider>
		</QueryClientProvider>
	)
}

export default Providers
