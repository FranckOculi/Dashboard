import SubTitle from '../../atomes/SubTitle'
import { COLOR } from '../../atomes/SubTitle/SubTitle'
import Title from '../../atomes/Title'
import './MainTitle.scss'

type Props = {
	title: string
	subtitle: string
	color?: keyof typeof COLOR
}

const MainTitle = ({ title, subtitle, color }: Props) => {
	return (
		<div className='main-title'>
			<Title
				title={title}
				style={{
					marginBottom: '0.75rem',
				}}
			/>

			<SubTitle text={subtitle} color={color ? color : undefined} />
		</div>
	)
}

export default MainTitle
