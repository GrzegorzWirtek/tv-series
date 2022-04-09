import { GET_SHOWS, GET_MAIN_SHOW } from './types';

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
		default:
			return state;
	}
};

export default showsReducer;
