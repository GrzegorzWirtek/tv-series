import './Nav.scss';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ShowContext from '../../context/showsContext';

const Nav = () => {
	const { pathname } = useLocation();
	const { show } = useContext(ShowContext);

	return pathname === '/' ? null : (
		<nav className='nav'>
			<Link className='nav__link nav__link--home' to={'/'}>
				Home
			</Link>

			<Link
				className='nav__link'
				to={pathname.includes('show') ? 'seasons' : `/show/${show.id}`}>
				{pathname.includes('show') ? 'Seasons' : 'Show'}
			</Link>

			<Link
				className='nav__link'
				to={
					pathname.includes('show') || pathname.includes('seasons')
						? '/cast'
						: '/seasons'
				}>
				{pathname.includes('show') || pathname.includes('seasons')
					? 'Cast'
					: 'Seasons'}
			</Link>

			<Link
				className='nav__link'
				to={
					pathname.includes('crew') || pathname.includes('person')
						? 'cast'
						: 'crew'
				}>
				{pathname.includes('crew') || pathname.includes('person')
					? 'Cast'
					: 'Crew'}
			</Link>

			<Link className='nav__link' to={-1}>
				<img src='./arrow_back_ios_black_24dp.svg' alt='' />
			</Link>
		</nav>
	);
};

export default Nav;
