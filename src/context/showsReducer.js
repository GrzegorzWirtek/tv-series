import { GET_SHOWS, GET_MAIN_SHOW, SET_ROUTE } from './types';

const showsReducer = (state, action) => {
	switch (action.type) {
		case GET_SHOWS:
			return {
				...state,
				shows: action.payload.shows,
				route: action.payload.route,
			};
		case GET_MAIN_SHOW:
			return {
				...state,
				show: action.payload.show,
				route: action.payload.route,
			};
		case SET_ROUTE:
			return {
				...state,
				route: action.payload,
			};
		default:
			return state;
	}
};

export default showsReducer;
