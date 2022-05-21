import './MainShow.scss';
import People from '../../components/People/People';

import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmptyImage from '../../components/EmptyImage/EmptyImage';

const MainShow = () => {
	const { id } = useParams();

	const { getMainShow, show } = useContext(ShowsContext);

	useEffect(() => {
		getMainShow(id);
	}, [getMainShow, id]);

	return (
		<section className='main-show'>
			{!show.name ? null : (
				<>
					<section className='main-show__content'>
						{show.image ? (
							<img
								className='main-show__img'
								src={show.image.medium}
								alt={show.name}
							/>
						) : (
							<EmptyImage />
						)}
						<div className='main-show__details'>
							<p className='main-show__name'>{show.name}</p>

							{show.premiered && (
								<p className='main-show__interval'>
									{`${show.premiered.slice(0, 4)}-${
										show.ended ? show.ended.slice(0, 4) : ''
									}`}
								</p>
							)}

							{show.network && (
								<p className='main-show__country'>
									{show.network.country.name}
								</p>
							)}
							<p className='main-show__genres'>
								{show.genres && show.genres.join(' | ')}
							</p>
							<p className='main-show__channel'>
								{show.webChannel
									? show.webChannel.name
									: show.network && show.network.name}
							</p>
							<p className='main-show__rating'>
								<span className='main-show__rating-span'>Rating: </span>{' '}
								{show.rating.average ? show.rating.average : 0}
							</p>
						</div>

						{show.summary && (
							<p className='main-show__description'>
								{show.summary.replace(
									/<p>|<[/]p>|<b>|<[/]b>|<i>|<[/]i>|<br [/]>/g,
									'',
								)}
							</p>
						)}
					</section>

					{show._embedded.cast.length ? (
						<>
							<People
								people={show._embedded.cast.slice(0, 6)}
								isRole={true}
								isCrew={false}
								isFullCast={false}
								title='Cast'
							/>

							{show._embedded.cast.length > 6 ? (
								<Link to={`/cast/${id}`} className='main-show__full-cast'>
									Show full cast {'>>'}
								</Link>
							) : null}
						</>
					) : null}
				</>
			)}
		</section>
	);
};

export default MainShow;
