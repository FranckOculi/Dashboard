import SubTitle from '../../atomes/SubTitle'
import Title from '../../atomes/Title'
import './Profile.scss'

type Props = {
	image: string
	name: string
	role: string
}

const Profile = ({ image, name, role }: Props) => {
	return (
		<div className='profile'>
			<img
				alt='user profile'
				width='100px'
				height='100px'
				src={image}
				style={{
					cursor: 'pointer',
					borderRadius: '50%',
					marginBottom: 10,
				}}
			/>
			<Title
				title={name}
				component='h2'
				style={{
					margin: 0,
				}}
			/>
			<SubTitle text={role} color='green' />
		</div>
	)
}

export default Profile
