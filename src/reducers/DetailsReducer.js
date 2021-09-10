import { DETAILS, DETAILS_SUCCESS, DETAILS_FAIL } from "../config.js";

export const DetailsReducer = (state = { info: null }, action) => {
	console.log(state.info, "999999999999");
	switch (action.type) {
		case DETAILS:
			if (state.info) {
				console.log(state.info, "88888888888888");
				return { loading: false, info: state.info };
			}
			return { loading: true };
		case DETAILS_SUCCESS:
			return { loading: false, info: action.payload };
		case DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
