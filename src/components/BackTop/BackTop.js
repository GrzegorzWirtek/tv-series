import './BackTop.scss';

const BackTop = () => {
	return (
		<p className='back-top' onClick={() => window.scrollTo(0, 0)}>
			Back top
		</p>
	);
};

export default BackTop;
