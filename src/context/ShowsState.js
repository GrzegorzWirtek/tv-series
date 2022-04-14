import ShowsContext from './showsContext';
import { useReducer, useCallback } from 'react';
import {
	GET_SHOWS,
	GET_MAIN_SHOW,
	REMOVE_MAIN_SHOW,
	GET_SEASONS,
	GET_CREW,
} from './types';
import showsReducer from './showsReducer';
import axios from 'axios';

const ShowsState = (props) => {
	const initialState = {
		shows: [],
		show: {},
		seasons: [],
		crew: [1],
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
		const mainShowData = await axios.get(
			`https://api.tvmaze.com/shows/${id}?embed=cast`,
		);

		return dispatch({
			type: GET_MAIN_SHOW,
			payload: mainShowData.data,
		});
	}, []);

	const removeData = useCallback(() => {
		return dispatch({
			type: REMOVE_MAIN_SHOW,
		});
	}, []);

	const getSeasons = useCallback(async (id) => {
		const seasonsData = await axios.get(
			`https://api.tvmaze.com/shows/${id}/episodes?specials=${id}`,
		);
		return dispatch({
			type: GET_SEASONS,
			payload: seasonsData.data,
		});
	}, []);

	const getCrew = useCallback(async (id) => {
		const crewData = await axios.get(`https://api.tvmaze.com/shows/${id}/crew`);
		return dispatch({
			type: GET_CREW,
			payload: crewData.data.length ? crewData.data : [1],
		});
	}, []);

	return (
		<ShowsContext.Provider
			value={{
				shows: state.shows,
				show: state.show,
				route: state.route,
				seasons: state.seasons,
				crew: state.crew,
				getShows,
				getMainShow,
				removeData,
				getSeasons,
				getCrew,
			}}>
			{props.children}
		</ShowsContext.Provider>
	);
};

export default ShowsState;
