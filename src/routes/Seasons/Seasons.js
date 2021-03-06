import './Seasons.scss';
import Popup from '../../components/Popup/Popup';
import BackTop from '../../components/BackTop/BackTop';

import { useContext, useEffect, useState } from 'react';
import ShowsContext from '../../context/showsContext';
import { useParams, useNavigate } from 'react-router-dom';
import DetailsHeader from '../../components/DetailsHeader/DetailsHeader';

import { Suspense } from 'react';

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
						<p className='seasons__se-name--nr'>{index + 1}</p>
						<p className='seasons__se-name--text'>{episode.name}</p>
					</p>
				))}
			</div>
		);
	});

	return (
		<Suspense>
			<section className='seasons'>
				{infoId ? (
					<Popup
						info={seasons.find((item) => item.id === infoId)}
						click={handleCloseInfo}
					/>
				) : null}
				<DetailsHeader
					image={show.image}
					title={show.name}
					text={`SEASONS: ${seasonsArr.length}`}
				/>
				{seasonsContent}
			</section>
			{(seasonsArr.length > 3 && seasonsArr[0].length > 6) ||
			seasonsArr[0] > 20 ? (
				<BackTop />
			) : null}
		</Suspense>
	);
};

export default Seasons;
