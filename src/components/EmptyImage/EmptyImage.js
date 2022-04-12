import './EmptyImage.scss';

const EmptyImage = ({ subClass }) => {
	return (
		<div className={`empty-img ${subClass}`}>
			<p className='empty-img-text'>No photo</p>
		</div>
	);
};

export default EmptyImage;
