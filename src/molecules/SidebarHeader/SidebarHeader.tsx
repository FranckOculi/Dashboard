import React from 'react'
import MenuButton from '../../atomes/MenuButton'
import SubTitle from '../../atomes/SubTitle'
import './SidebarHeader.scss'

type Props = {
	title: string
	onClick: Function
}

const SidebarHeader = ({ title, onClick }: Props) => {
	return (
		<div className='sidebarheader'>
			<SubTitle text={title} />
			<MenuButton onClick={onClick} />
		</div>
	)
}

export default SidebarHeader
