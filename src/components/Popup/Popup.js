import './Popup.scss';

const Popup = ({ info, click }) => {
	return (
		<div className='popup'>
			<div className='popup__wrapper'>
				<img
					src='close.svg'
					alt='close'
					onClick={click}
					className='popup__close'
				/>
				{info.image ? (
					<img className='popup__img' src={info.image.medium} alt={info.name} />
				) : (
					<div className='popup__empty-img'>
						<p className='popup__empty-img-text'>No photo</p>
					</div>
				)}
				<h4 className='popup__title'>{info.name}</h4>
				{info.airdate && <p className='popup__date'>{info.airdate}</p>}
				<p className='popup__summary'>
					{info.summary ? (
						info.summary.replace(/<p>|<[/]p>|<b>|<[/]b>|<i>|<[/]i>/g, '')
					) : (
						<p className='popup__no-description'>No description</p>
					)}
				</p>
			</div>
		</div>
	);
};

export default Popup;
