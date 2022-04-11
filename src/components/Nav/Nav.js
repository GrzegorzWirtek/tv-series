import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ShowContext from '../../context/showsContext';

const Nav = () => {
	const { pathname } = useLocation();
	const { show } = useContext(ShowContext);

	return pathname === '/' ? null : (
		<nav className='nav'>
			<NavLink
				className='nav__link'
				to={pathname.includes('show') ? '/' : `/show/${show.id}`}>
				{pathname.includes('show') ? 'Home' : 'Show'}
			</NavLink>

			<NavLink className='nav__link' to={`/seasons/${show.id}`}>
				Seasons
			</NavLink>

			<NavLink className='nav__link' to={'/cast'}>
				Cast
			</NavLink>

			<NavLink className='nav__link' to={'/crew'}>
				Crew
			</NavLink>

			<NavLink className='nav__link' to={-1}>
				<img src='./arrow_back_ios_black_24dp.svg' alt='' />
			</NavLink>
		</nav>
	);
};

export default Nav;
