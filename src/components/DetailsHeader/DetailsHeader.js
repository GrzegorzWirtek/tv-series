import './DetailsHeader.scss';
import EmptyImage from '../EmptyImage/EmptyImage';

const DetailsHeader = ({ image, title, text }) => {
	return (
		<div className='details__header'>
			{image ? (
				<img className='details__img' src={image.medium} alt={title} />
			) : (
				<EmptyImage
					subClass='details__subclass'
					textSubClass='details__text-subclass'
				/>
			)}
			<h3 className='details__title'>{title}</h3>
			{text && <p className='details__nr-of'>{text}</p>}
		</div>
	);
};

export default DetailsHeader;
