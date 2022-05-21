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
	}, [show, navigate]);

	const castContent = show.name ? (
		show._embedded.cast.length ? (
			<People
				people={show._embedded.cast}
				isRole={true}
				isCrew={false}
				isFullCast={true}
				title='Cast'
			/>
		) : (
			<p className='cast__info'>No info</p>
		)
	) : null;

	return (
		<>
			{show.name ? (
				<section className='crew'>
					<DetailsHeader image={show.image} title={show.name} text={null} />
					{castContent}
					{show._embedded.cast.length > 5 ? <BackTop /> : null}
				</section>
			) : null}
		</>
	);
};

export default Cast;
