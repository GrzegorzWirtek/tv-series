import './Home.scss';
import Shows from '../../components/Shows/Shows';
import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';

const Home = () => {
	const { shows, getShows } = useContext(ShowsContext);

	useEffect(() => {
		if (!shows.length) {
			getShows('days');
		}
	}, [getShows, shows.length]);

	return (
		<>
			<Shows />
		</>
	);
};

export default Home;
