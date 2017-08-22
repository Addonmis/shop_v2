import jwt from 'jsonwebtoken';

import config from '../config';
import maria from '../config/db';

export const getUserByToken = async (token) => {
	const {_id} = token;
	try{
		var user = await maria.query('select id_user, username, id_role from users where id_user = ?', [_id]).then((res) => res);
	} catch(e){
		throw e;
	}

	return user[0];
};