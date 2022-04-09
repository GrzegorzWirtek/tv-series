import './Search.scss';

import ShowsContext from '../../context/showsContext';
import { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const { getShows } = useContext(ShowsContext);
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		getShows(inputValue);
		setInputValue('');
		inputRef.current.blur();

		navigate('/');
	};

	return (
		<section className='search'>
			<form className='search__form' onSubmit={handleSubmit}>
				<input
					className='search__input'
					type='text'
					placeholder='Search by title'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					ref={inputRef}
				/>
				<button type='submit' className='search__button'>
					<img className='search__svg' src='./search.svg' alt='Search button' />
				</button>
			</form>
		</section>
	);
};

export default Search;
