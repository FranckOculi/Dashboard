import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {
	DownloadIcon,
	MailIcon,
	MoneyIcon,
	PersonIcon,
} from '../../atomes/Icons'
import SubTitle from '../../atomes/SubTitle'
import Title from '../../atomes/Title'
import './Card.scss'

type CardProps = {
	title: string
	subtitle: string
}

const violet = '#868dfb'
const green = '#70d8bd'

const CardLarge = ({ title, subtitle }: CardProps) => {
	const options = {
		chart: {
			height: 350,
			type: 'line',
			toolbar: {
				show: false,
			},
		},

		dataLabels: {
			enabled: false,
		},

		stroke: {
			curve: 'smooth',
		},

		grid: {
			borderColor: 'transparent',
			padding: {
				right: 0,
				left: 30,
			},
		},

		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec',
			],
		},
		legend: {
			position: 'top',
		},
	}

	const series = [
		{
			name: 'US',
			data: [
				7507.85, 8128.0, 8122.9, 9165.5, 9340.7, 7423.7, 8423.5, 7514.3,
				5481.85, 6487.7, 10506.9, 11626.2,
			],
		},
		{
			name: 'Europe',
			data: [
				8423.7, 7423.5, 5514.3, 7481.85, 4487.7, 5506.9, 9626.2, 10668.95,
				7602.3, 8607.55, 8512.9, 8496.25,
			],
		},
	]

	return (
		<div className='card card-large'>
			<div className='card-top'>
				<div>
					<Title
						title={title}
						style={{ fontSize: 14, margin: 0, marginBottom: 10 }}
					/>
					<SubTitle text={subtitle} color='green' style={{ fontSize: 20 }} />
				</div>
				<DownloadIcon color={green} />
			</div>

			<div className='card-bottom'>
				<ReactApexChart
					options={options}
					series={series}
					type='line'
					height='250'
					width='700'
					// width='70px'
					// height='70px'
				/>
			</div>
		</div>
	)
}

export default CardLarge
