import './Home.scss';
import Shows from '../../components/Shows/Shows';
import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';

const Home = () => {
	const { getShows } = useContext(ShowsContext);

	useEffect(() => {
		getShows('house');
	}, [getShows]);

	return (
		<>
			<Shows />
		</>
	);
};

export default Home;
