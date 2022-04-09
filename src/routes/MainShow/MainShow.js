import './MainShow.scss';

import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MainShow = () => {
	const { id } = useParams();

	const { getMainShow, show } = useContext(ShowsContext);

	useEffect(() => {
		getMainShow(id);
	}, [getMainShow, id]);

	// console.log(show._embedded ? show._embedded.cast : 'nie ma obsady');
	console.log(show);

	return !show.id ? null : (
		<section className='main-show'>
			{show.image ? (
				<img
					className='main-show__img'
					src={show.image.medium}
					alt={show.name}
				/>
			) : (
				<div className='main-show__empty-img'>No photo</div>
			)}
			<div className='main-show__details'>
				<p className='main-show__name'>{show.name}</p>
				{show.premiered && (
					<p className='main-show__interval'>{`${show.premiered.slice(0, 4)}${
						show.ended ? -show.ended.slice(0, 4) : ''
					}`}</p>
				)}
				{show.network && (
					<p className='main-show__country'>{show.network.country.name}</p>
				)}
				<p className='main-show__genres'>{show.genres.join(' | ')}</p>
				<p className='main-show__channel'>
					{show.webChannel ? show.webChannel.name : show.network.name}
				</p>
				<p className='main-show__rating'>
					<span className='main-show__rating-span'>Rating: </span>{' '}
					{show.rating.average ? show.rating.average : 0}
				</p>
			</div>

			{show.summary && (
				<p className='main-show__description'>
					{show.summary.replace(/<p>|<[/]p>|<b>|<[/]b>/g, '')}
				</p>
			)}
		</section>
	);
};

export default MainShow;
