import Axios from "axios";
import { URL, DETAILS, DETAILS_SUCCESS, DETAILS_FAIL } from "../config.js";

export const detail =
	(data = null) =>
	async (dispatch) => {
		try {
			if (data) {
				dispatch({
					type: DETAILS,
					payload: data,
				});
			} else {
				dispatch({
					type: DETAILS,
				});
				const { data } = await Axios.get(`${URL}/webdev/assignment`);
				dispatch({
					type: DETAILS_SUCCESS,
					payload: data,
				});
			}
		} catch (err) {
			dispatch({
				type: DETAILS_FAIL,
				payload: err.message,
			});
		}
	};
