import React, { FC, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Spinner from '@/atomes/Spinner/Spinner'
import NotFound from '@/pages/notFound'
import Layout from '@/pages/global'

const Auth = lazy(() => import('@/pages/auth'))

const PublicOnlyRoutes: FC<React.PropsWithChildren<unknown>> = () => {
	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route index element={<Auth />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</Layout>
	)
}

export default PublicOnlyRoutes
