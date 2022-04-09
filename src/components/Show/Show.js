import './Show.scss';
import { useNavigate } from 'react-router-dom';

const Show = ({ showsData }) => {
	const navigate = useNavigate();

	const { name, image, webChannel, interval, genres, rating, id } = showsData;

	const handleChoose = (id) => {
		navigate(`/show/${id}`);
	};

	return (
		<article className='show' onClick={() => handleChoose(id)}>
			<div className='show__curtain'></div>
			<div className='show__img-wrapper'>
				<img className='show__img' src={image} alt={name} />
			</div>
			<h3 className='show__title'>{name}</h3>
			<p className='show__interval'>{interval}</p>
			<div className='show__rating'>
				<p className='show__rating-text'>RATING</p>
				<p className='show__rating-number'>{rating ? rating : 0}</p>
			</div>
			{genres && <p className='show__genres'>{genres}</p>}
			<p className='show__channel'>{webChannel}</p>
		</article>
	);
};

export default Show;
