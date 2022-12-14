import CreateDataContext from './CreateDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};

const signup = dispatch => {
	return async ({ email, password }) => {
		try {
			const { data } = await trackerApi.post('/signup', { email, password });
			console.log(data);
		} catch (err) {
			console.error(err);
			dispatch({
				type: 'add_error',
				payload: 'Something went wrong with sign up',
			});
		}
	};
};

const signin = dispatch => {
	return ({ email, password }) => {};
};

const signout = dispatch => {
	return () => {};
};

export const { Context, Provider } = CreateDataContext(
	authReducer,
	{ signup, signin, signout },
	{ isSignedIn: false, errorMessage: '' },
);
