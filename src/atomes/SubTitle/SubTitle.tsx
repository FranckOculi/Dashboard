import './SubTitle.scss'

export enum COLOR {
	'violet',
	'green',
}

export type SubTitleProps = {
	text: string
	color?: keyof typeof COLOR
	style?: React.CSSProperties
}

const SubTitle = ({ text, color, style }: SubTitleProps) => {
	return (
		<h3
			className={`subtitle ${
				color === 'green' ? 'green' : color === 'violet' ? 'violet' : ''
			}`}
			style={{ ...style }}
		>
			{text}
		</h3>
	)
}

export default SubTitle
