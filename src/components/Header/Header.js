import './Header.scss';
import Search from '../Search/Search';

const Header = () => {
	return (
		<header className='header'>
			<h1 className='header__title'>TV Series</h1>
			<Search />
		</header>
	);
};

export default Header;
