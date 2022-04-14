import './Crew.scss';
import People from '../../components/People/People';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';
import BackTop from '../../components/BackTop/BackTop';

import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Crew = () => {
	const { show, getCrew, crew } = useContext(ShowsContext);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		if (!show.name) return navigate('/');
		getCrew(id);
	}, [getCrew, id, show.name, navigate]);

	const crewContent = crew.length ? (
		crew[0] === 1 ? (
			<p className='crew__info'>No info</p>
		) : (
			<People
				people={crew}
				isRole={false}
				isCrew={true}
				isFullCast={false}
				title='Crew'
			/>
		)
	) : null;

	return (
		<>
			<section className='crew'>
				<DetailsHeader image={show.image} title={show.name} text={null} />
				{crewContent}
				{crew.length > 5 ? <BackTop /> : null}
			</section>
		</>
	);
};

export default Crew;
