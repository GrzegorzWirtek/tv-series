import './Footer.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<p className='footer__api'>
				The application uses the TVMAZE API{' '}
				<a
					className='footer__a'
					href='https://www.tvmaze.com/api'
					target='blank'>
					https://www.tvmaze.com/api
				</a>
			</p>
			<p className='footer__name'>2022 &copy; Grzegorz Wirtek</p>
			<div className='footer__icons'>
				<a
					href='https://www.facebook.com/grzegorz.wirtek/'
					target='blank'
					className='footer__icon footer__icon--in'>
					<img src='fb.svg' alt='facebook icon' />
				</a>
				<a
					href='https://www.instagram.com/grzegorz.wirtek/'
					target='blank'
					className='footer__icon'>
					<img src='in.svg' alt='instagram icon' />
				</a>
				<a
					href='https://github.com/GrzegorzWirtek?tab=repositories'
					target='blank'
					className='footer__icon'>
					<img src='gh.svg' alt='github icon' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
