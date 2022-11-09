import { SearchIcon } from '../../atomes/Icons'
import './Searchbar.scss'

const Searchbar = () => {
	return (
		<div className='searchbar'>
			<input className='input-search' placeholder='Search' />
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<SearchIcon />
			</div>
		</div>
	)
}
export default Searchbar
