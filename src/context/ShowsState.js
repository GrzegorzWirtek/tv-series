import ShowsContext from './showsContext';
import { useReducer, useCallback } from 'react';
import { GET_SHOWS, GET_MAIN_SHOW } from './types';
import showsReducer from './showsReducer';
import axios from 'axios';

const ShowsState = (props) => {
	const initialState = {
		shows: [],
		show: {},
	};

	const [state, dispatch] = useReducer(showsReducer, initialState);

	const getShows = useCallback(async (searchValue) => {
		const showData = await axios.get(
			`https://api.tvmaze.com/search/shows?q=${searchValue}`,
		);

		dispatch({
			type: GET_SHOWS,
			payload: showData.data,
		});
	}, []);

	const getMainShow = useCallback(async (id) => {
		const mainShowData = await axios.get(`https://api.tvmaze.com/shows/${id}`);

		return dispatch({
			type: GET_MAIN_SHOW,
			payload: mainShowData.data,
		});
	}, []);

	return (
		<ShowsContext.Provider
			value={{
				shows: state.shows,
				show: state.show,
				route: state.route,
				getShows,
				getMainShow,
			}}>
			{props.children}
		</ShowsContext.Provider>
	);
};

export default ShowsState;
