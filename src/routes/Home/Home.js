import './Home.scss';
import Shows from '../../components/Shows/Shows';
import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';

const RANDOM = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'r',
	's',
	't',
	'u',
	'w',
	'y',
	'z',
];

const Home = () => {
	const { shows, getShows, removeData } = useContext(ShowsContext);

	useEffect(() => {
		if (!shows.length) {
			getShows(RANDOM[Math.floor(Math.random() * RANDOM.length)]);
		} else {
			removeData();
		}
	}, [getShows, removeData, shows.length]);

	return (
		<main className='main'>
			<Shows />
		</main>
	);
};

export default Home;
