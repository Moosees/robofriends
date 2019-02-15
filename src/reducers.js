import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
	searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCHFIELD:
			// copy the original state and updated serachfield with user input to a new object.
			return Object.assign({}, state, { searchField: action.payload });
		//return { ...state, searchField: action.payload };
		default:
			return state;
	}
};