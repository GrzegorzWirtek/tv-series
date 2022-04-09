import './MainShow.scss';

import ShowsContext from '../../context/showsContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MainShow = () => {
	const { id } = useParams();

	const { getMainShow, show } = useContext(ShowsContext);

	useEffect(() => {
		getMainShow(id, 'show');
	}, [getMainShow, id]);

	const { name, image, summary } = show;
	const img = image ? image.medium : null;

	let description;
	if (summary) {
		description = summary.replace(/<p>|<[/]p>|<b>|<[/]b>/g, '');
	}

	return (
		<section className='main-show'>
			<p className='main-show__description'>{description}</p>
			<p className='main-show__name'>{name}</p>
			<img className='main-show__img' src={img} alt={name} />
		</section>
	);
};

export default MainShow;
