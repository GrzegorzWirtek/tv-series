import './Cast.scss';
import People from '../../components/People/People';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import BackTop from '../../components/BackTop/BackTop';

import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cast = () => {
	const { show } = useContext(ShowsContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!show.name) return navigate('/');
	}, [show.name, navigate]);

	const cast = show._embedded.cast.length ? (
		<>
			<DetailsHeader image={show.image} title={show.name} text={null} />
			<People
				people={show._embedded.cast}
				isRole={true}
				isCrew={false}
				isFullCast={true}
			/>
			{show._embedded.cast.length > 5 ? <BackTop /> : null}
		</>
	) : (
		<p className='cast__info'>No info</p>
	);

	return <section className='cast'>{cast}</section>;
};

export default Cast;
