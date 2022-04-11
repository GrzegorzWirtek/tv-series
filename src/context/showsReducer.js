import {
	GET_SHOWS,
	GET_MAIN_SHOW,
	REMOVE_MAIN_SHOW,
	GET_SEASONS,
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
			};
		case GET_SEASONS:
			return {
				...state,
				seasons: action.payload.data,
				show: { id: action.payload.id },
			};
		default:
			return state;
	}
};

export default showsReducer;
