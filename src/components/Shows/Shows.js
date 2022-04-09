import './Shows.scss';
import Show from '../Show/Show';

import ShowsContext from '../../context/showsContext';
import { useContext } from 'react';

const Shows = () => {
	const { shows } = useContext(ShowsContext);

	const showsArray = shows.map((item) => {
		const {
			image,
			name,
			webChannel,
			genres,
			rating,
			premiered,
			ended,
			network,
			id,
		} = item.show;

		const showsData = {
			id,
			name,
			image: image ? image.medium : null,
			webChannel: webChannel ? webChannel.name : network.name,
			interval: premiered
				? `${premiered.slice(0, 4)}${ended ? -ended.slice(0, 4) : ''}`
				: null,
			genres: genres.join(' | '),
			rating: rating.average,
		};

		return <Show key={id} showsData={showsData} />;
	});

	return <section className='shows'>{showsArray}</section>;
};

export default Shows;
