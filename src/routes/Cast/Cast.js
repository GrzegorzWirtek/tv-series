import './Cast.scss';

import ShowsContext from '../../context/showsContext';
import { useContext } from 'react';
import People from '../../components/People/People';

const Cast = () => {
	const { show } = useContext(ShowsContext);

	const cast = show._embedded.cast.length ? (
		<People people={show._embedded.cast} />
	) : (
		<p className='cast__info'>No info</p>
	);

	return <>{cast}</>;
};

export default Cast;
