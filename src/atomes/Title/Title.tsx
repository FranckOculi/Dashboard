import './Title.scss'

enum COMPONENT {
	'h1',
	'h2',
}

type Props = {
	title: string
	component?: keyof typeof COMPONENT
	style?: React.CSSProperties
}

const Title = ({ title, component = 'h1', style }: Props) => {
	if (component === 'h1')
		return (
			<h1 className='title' style={{ ...style }}>
				{title}
			</h1>
		)

	return (
		<h2 className='title title-h2' style={{ ...style }}>
			{title}
		</h2>
	)
}

export default Title
