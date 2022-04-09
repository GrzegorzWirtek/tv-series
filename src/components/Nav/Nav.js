import './Nav.scss';
import { Link } from 'react-router-dom';

import ShowsContext from '../../context/showsContext';
import { useContext } from 'react';

const Nav = () => {
	const { route } = useContext(ShowsContext);
	const linksArr = [
		{
			name: route === 'show' ? 'Seasons' : 'Main',
			route: '/seasons',
		},
		{
			name: route === 'show' || route === 'seasons' ? 'Cast' : 'Seasons',
			route: '/cast',
		},
		{
			name: route === 'crew' || route === 'person' ? 'Cast' : 'Crew',
			route: '/crew',
		},
	];

	const links = linksArr.map((link) => (
		<Link key={link.route} className='nav__link' to={link.route}>
			{link.name}
		</Link>
	));

	return (
		<nav className='nav'>
			{links}
			<Link className='nav__link' to='../'>
				<img src='./arrow_back_ios_black_24dp.svg' alt='' />
			</Link>
		</nav>
	);
};

export default Nav;
