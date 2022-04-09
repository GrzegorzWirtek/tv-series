import ShowsContext from './showsContext';
import { useReducer, useCallback } from 'react';
import { GET_SHOWS, GET_MAIN_SHOW, SET_ROUTE } from './types';
import showsReducer from './showsReducer';
import axios from 'axios';

const ShowsState = (props) => {
	const initialState = {
		shows: [],
		show: {},
		route: 'home',
	};

	const [state, dispatch] = useReducer(showsReducer, initialState);

	const getShows = useCallback(async (searchValue, route) => {
		const showData = await axios.get(
			`https://api.tvmaze.com/search/shows?q=${searchValue}`,
		);

		dispatch({
			type: GET_SHOWS,
			payload: { shows: showData.data, route },
		});
	}, []);

	const getMainShow = useCallback(async (id, route) => {
		const mainShowData = await axios.get(`https://api.tvmaze.com/shows/${id}`);

		return dispatch({
			type: GET_MAIN_SHOW,
			payload: { show: mainShowData.data, route },
		});
	}, []);

	const setRoute = useCallback((route) => {
		return dispatch({
			type: SET_ROUTE,
			payload: route,
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
				setRoute,
			}}>
			{props.children}
		</ShowsContext.Provider>
	);
};

export default ShowsState;
