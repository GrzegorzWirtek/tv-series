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
			id: id && id,
			name: name && name,
			image: image && image.medium,
			webChannel: webChannel ? webChannel.name : network && network.name,
			interval:
				premiered &&
				`${premiered.slice(0, 4)}${ended ? -ended.slice(0, 4) : ''}`,

			genres: genres && genres.join(' | '),
			rating: rating && rating.average,
		};

		return <Show key={id} showsData={showsData} />;
	});

	return <section className='shows'>{showsArray}</section>;
};

export default Shows;
