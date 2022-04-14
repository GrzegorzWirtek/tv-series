import {
	GET_SHOWS,
	GET_MAIN_SHOW,
	REMOVE_MAIN_SHOW,
	GET_SEASONS,
	GET_CREW,
} from './types';

const showsReducer = (state, action) => {
	switch (action.type) {
		case GET_SHOWS:
			return {
				...state,
				shows: action.payload,
			};
		case GET_MAIN_SHOW:
			return {
				...state,
				show: action.payload,
			};
		case REMOVE_MAIN_SHOW:
			return {
				...state,
				show: {},
				seasons: [],
				crew: [],
			};
		case GET_SEASONS:
			return {
				...state,
				seasons: action.payload,
			};
		case GET_CREW:
			return {
				...state,
				crew: action.payload,
			};
		default:
			return state;
	}
};

export default showsReducer;
