import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export const validation = (username, password) => {
	let error = '';
	if (isEmpty(username)){
		error = "The user name is not entered";
	}
	if (isEmpty(password)){
		error = "Password not entered";
	}
	if (!Validator.isLength(password, {min: 8, max: undefined})){
		error = "Min password length 8 characters";
	}
	return {error, isValid: isEmpty(error)}
};