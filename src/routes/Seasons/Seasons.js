import './Seasons.scss';
import { useContext, useEffect } from 'react';
import ShowsContext from '../../context/showsContext';
import { useParams } from 'react-router-dom';

const Seasons = () => {
	const { seasons, getSeasons } = useContext(ShowsContext);

	const { id } = useParams();

	useEffect(() => {
		getSeasons(id);
	}, [getSeasons, id]);

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

	// console.log(seasonsArr);

	let description = seasons.find((item) => item.id === 1610); //opis z Fargo
	console.log(description && description.summary);

	const tak = seasonsArr.map((season, index) => {
		return (
			<div key={index}>
				sezon{index + 1}
				{season.map((episode) => (
					<p>
						{episode.name}, ID odcinka: {episode.id}
					</p>
				))}
			</div>
		);
	});

	return (
		<>
			<p>LICZBA SEZONÓW: {seasonsArr.length}</p>
			{tak}
		</>
	);
};

export default Seasons;
