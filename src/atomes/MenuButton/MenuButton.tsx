import MenuIcon from '@mui/icons-material/Menu'
import './MenuButton.scss'

type Props = {
	onClick: Function
}

const MenuButton = ({ onClick }: Props) => {
	return <MenuIcon className='menu-button' onClick={onClick} />
}

export default MenuButton
