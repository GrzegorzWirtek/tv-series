import './Header.scss';
import Search from '../Search/Search';

const Header = () => {
	return (
		<header className='header'>
			<div className='header__logo'>
				<img src='mstile-150x150.png' alt='logo' className='header__img' />
				<h1 className='header__title'>TV Series</h1>
			</div>
			<Search />
		</header>
	);
};

export default Header;
