import './Seasons.scss';
import { useContext, useEffect, useState } from 'react';
import ShowsContext from '../../context/showsContext';
import { useParams, useNavigate } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';

const Seasons = () => {
	const { show, seasons, getSeasons } = useContext(ShowsContext);
	const navigate = useNavigate();
	const { id } = useParams();
	const [infoId, setInfoId] = useState(0);

	useEffect(() => {
		if (!show.name) return navigate('/');
		getSeasons(id);
	}, [getSeasons, id, navigate, show.name]);

	let episodesArr = [];
	let seasonsArr = [];
	let counter = 1;

	if (seasons.length) {
		for (let i = 0; i < seasons.length; i++) {
			if (i === seasons.length - 1) {
				seasonsArr.push(episodesArr);
			} else if (seasons[i].season === counter) {
				episodesArr.push(seasons[i]);
			} else if (seasons[i].season === counter + 1) {
				seasonsArr.push(episodesArr);
				episodesArr = [];
				episodesArr.push(seasons[i]);
				counter++;
			}
		}
	}

	const handleShowInfo = (episodeId) => {
		setInfoId(episodeId);
	};

	const handleCloseInfo = () => {
		setInfoId(0);
	};

	const seasonsContent = seasonsArr.map((season, index) => {
		return (
			<div className='seasons__se-wrapper' key={index}>
				<p className='seasons__se-nr'>Season {index + 1}</p>
				{season.map((episode, index) => (
					<p
						className='seasons__se-name'
						key={episode.id}
						onClick={() => handleShowInfo(episode.id)}>
						<span className='seasons__se-name--nr'>{index + 1}</span>
						<span className='seasons__se-name--text'>{episode.name}</span>
					</p>
				))}
			</div>
		);
	});

	return (
		show.name && (
			<section className='seasons'>
				{infoId ? (
					<Popup
						info={seasons.find((item) => item.id === infoId)}
						click={handleCloseInfo}
					/>
				) : null}
				<div className='seasons__wrapper'>
					<div className='seasons__header'>
						{show.image ? (
							<img
								className='seasons__img'
								src={show.image.medium}
								alt={show.name}
							/>
						) : (
							<div className='seasons__img-empty'>
								<p className='seasons__img-empty-text'>No photo</p>
							</div>
						)}
						<h3 className='seasons__title'>{show.name}</h3>
						<p className='seasons__nr-of'>Seasons: {seasonsArr.length}</p>
					</div>
					{seasonsContent}
				</div>
			</section>
		)
	);
};

export default Seasons;
