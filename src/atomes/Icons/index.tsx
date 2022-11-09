import Search from '@mui/icons-material/Search'
import EmailIcon from '@mui/icons-material/Email'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import Download from '@mui/icons-material/Download'
import Traffic from '@mui/icons-material/Traffic'

import './Icons.scss'

type Props = {
	color?: string
	size?: string
}

export const MailIcon = ({ color = '', size = '' }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<EmailIcon
				className='icons'
				style={{ color: color ? color : '', fontSize: size ? size : '' }}
			/>
		</div>
	)
}

export const SearchIcon = ({ color = '', size = '' }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Search
				className='icons'
				style={{ color: color ? color : '', fontSize: size ? size : '' }}
			/>
		</div>
	)
}

export const PersonIcon = ({ color = '', size = '' }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<PersonAddIcon
				className='icons'
				style={{ color: color ? color : '', fontSize: size ? size : '' }}
			/>
		</div>
	)
}

export const MoneyIcon = ({ color = '', size = '' }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<AttachMoneyIcon
				className='icons'
				style={{ color: color ? color : '', fontSize: size ? size : '' }}
			/>
		</div>
	)
}

export const DownloadIcon = ({ color = '', size = '' }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Download
				className='icons'
				style={{ color: color ? color : '', fontSize: size ? size : '' }}
			/>
		</div>
	)
}

export const TrafficIcon = ({ color = '', size = '' }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Traffic
				className='icons'
				style={{ color: color ? color : '', fontSize: size ? size : '' }}
			/>
		</div>
	)
}
