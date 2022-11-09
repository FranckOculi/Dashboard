import { RouteObject } from 'react-router'
import Dashboard from '../pages/dashboard'
import Team from '../pages/team'
import Invoices from '../pages/invoices'
import Contacts from '../pages/contacts'

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Dashboard />,
	},
	{
		path: '/team',
		element: <Team />,
	},
	{
		path: '/invoices',
		element: <Invoices />,
	},
	{
		path: '/invoices',
		element: <Invoices />,
	},
	{
		path: '/contacts',
		element: <Contacts />,
	},
]
