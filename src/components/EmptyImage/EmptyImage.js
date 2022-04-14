import './EmptyImage.scss';

const EmptyImage = ({ subClass, textSubClass }) => {
	return (
		<div className={`empty-img ${subClass}`}>
			<p className={`empty-img-text ${textSubClass}`}>No photo</p>
		</div>
	);
};

export default EmptyImage;
