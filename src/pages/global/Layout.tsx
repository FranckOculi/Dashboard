import React, { FC } from 'react'

import TopBar from '@/molecules/Topbar'
import Sidebar from '@/organisms/Sidebar'

const Layout: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div
			className='app'
			style={{
				display: 'flex',
				width: '100%',
			}}
		>
			<Sidebar />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					width: '85%',
				}}
			>
				<TopBar />
				{children}
			</div>
		</div>
	)
}

export default Layout
