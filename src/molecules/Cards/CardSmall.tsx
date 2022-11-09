import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {
	MailIcon,
	MoneyIcon,
	PersonIcon,
	TrafficIcon,
} from '../../atomes/Icons'
import SubTitle from '../../atomes/SubTitle'
import Title from '../../atomes/Title'
import './Card.scss'

enum ICON {
	'email',
	'person',
	'money',
	'traffic',
}

type RenderIconProps = {
	name: keyof typeof ICON
}

type CardProps = {
	icon: keyof typeof ICON
	title: string
	subtitle: string
	series: number[]
	percent: string
}

const violet = '#868dfb'
const green = '#70d8bd'

const RenderIcon = ({ name }: RenderIconProps) => {
	switch (name) {
		case 'email':
			return <MailIcon color={green} />
		case 'person':
			return <PersonIcon color={green} />
		case 'money':
			return <MoneyIcon color={green} />
		default:
			return <TrafficIcon color={green} />
	}
}

const CardSmall = ({ icon, title, subtitle, series, percent }: CardProps) => {
	const options = {
		chart: {
			type: 'donut',
		},
		legend: { show: false },
		dataLabels: { enabled: false },
		tooltip: { enabled: false },
		fill: { colors: [green, violet] },
		stroke: { width: 0 },
		plotOptions: {
			pie: {
				expandOnClick: false,
				donut: {
					size: '75%',
				},
			},
		},
	}
	return (
		<div className='card card-small'>
			<div className='card-left'>
				<RenderIcon name={icon} />
				<Title title={title} style={{ fontSize: 14, margin: 0 }} />
				<SubTitle text={subtitle} color='green' style={{ fontSize: 12 }} />
			</div>

			<div className='card-right'>
				<div className='chart-wrapper'>
					<ReactApexChart
						options={options}
						series={series}
						type='donut'
						width='70px'
						height='70px'
					/>
				</div>
				<span
					className='card-percent'
					style={{
						color: green,
						fontSize: 12,
						fontStyle: 'italic',
						paddingRight: 45,
					}}
				>
					{percent}
				</span>
			</div>
		</div>
	)
}

export default CardSmall
