import api from '../services/api';

export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';
export const DELETE_USER_SUCCESS = 'REDUX_THUNK_DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = 'REDUX_THUNK_DELETE_USER_ERROR';

export const loadUsers = () => dispatch => {
	dispatch({ type: LOAD_USERS_LOADING });

	api.get('/users')
		.then(response => {
			dispatch({ type: LOAD_USERS_SUCCESS, data: response.data });
		})
		.catch(error => {
			dispatch({
				type: LOAD_USERS_ERROR,
				data: error.message || 'Unexpected Error!!!'
			});
		});
};
