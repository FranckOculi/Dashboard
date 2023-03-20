import React, { FC, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Spinner from '@/atomes/Spinner/Spinner'
import NotFound from '@/pages/NotFound'
import { AuthenticatedLayout } from '@/providers/Layouts'

const Contacts = lazy(() => import('@/pages/contacts'))
const Dashboard = lazy(() => import('@/pages/dashboard'))

const AuthenticatedRoutes: FC<React.PropsWithChildren<unknown>> = () => {
	return (
		<AuthenticatedLayout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route index element={<Dashboard />} />
					<Route path='contacts' element={<Contacts />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</AuthenticatedLayout>
	)
}

export default AuthenticatedRoutes
