import './Nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import ShowContext from '../../context/showsContext';

const Nav = () => {
	const { pathname } = useLocation();
	const { show } = useContext(ShowContext);

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return pathname === '/' ? null : (
		<nav className='nav'>
			<NavLink
				className='nav__link'
				to={pathname.includes('show') ? '/' : `/show/${show.id}`}>
				{pathname.includes('show') ? 'Home' : 'Main'}
			</NavLink>

			<NavLink className='nav__link' to={`/seasons/${show.id}`}>
				Seasons
			</NavLink>

			<NavLink className='nav__link' to={`/cast/${show.id}`}>
				Cast
			</NavLink>

			<NavLink className='nav__link' to={`/crew/${show.id}`}>
				Crew
			</NavLink>

			<NavLink className='nav__link' to={'/'}>
				<img src='./arrow_back_ios_black_24dp.svg' alt='' />
			</NavLink>
		</nav>
	);
};

export default Nav;
