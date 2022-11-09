import React from 'react'
import MainTitle from '../../molecules/MainTitle'
import CardSmall from '../../molecules/Cards/CardSmall'
import './Dashboard.scss'
import CardLarge from '../../molecules/Cards/CardLarge'

const Dashboard = () => {
	const emails = [75, 25]
	const sales = [50, 50]
	const persons = [24, 76]
	const traffic = [78, 22]

	return (
		<main className='main'>
			<MainTitle
				title='DASHBOARD'
				subtitle='Welcome to your dashboard'
				color='green'
			/>
			<section className='content'>
				<section className='content-top'>
					<CardSmall
						icon='email'
						title='12,361'
						subtitle='Emails Sent'
						series={emails}
						percent='+14%'
					/>
					<CardSmall
						icon='money'
						title='431,225'
						subtitle='Sales Obtained'
						series={sales}
						percent='+21%'
					/>
					<CardSmall
						icon='person'
						title='2,361'
						subtitle='New Clients'
						series={persons}
						percent='+5%'
					/>
					<CardSmall
						icon='traffic'
						title='12,361'
						subtitle='Traffic Received'
						series={traffic}
						percent='+14%'
					/>
				</section>
				<section className='content-main'>
					<CardLarge
						title='Revenue Generated'
						subtitle='$15,526.24'
						// series={persons}
						// percent='+5%'
					/>
				</section>
				<section className='content-bottom'>
					<CardSmall
						icon='traffic'
						title='12,361'
						subtitle='Traffic Received'
						series={traffic}
						percent='+14%'
					/>
				</section>
			</section>
		</main>
	)
}

export default Dashboard
