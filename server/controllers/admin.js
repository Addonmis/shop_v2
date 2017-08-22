import maria from '../config/db';

import * as m_user from '../services/user';

export async function getAdmin(req, res, next){
	const {token} = req;

	try{
		var user = await m_user.getUserByToken(token);
		var list_users = await maria.query('call list_users();').then((rows) => rows);
		var list_logs = await maria.query('call show_logs();').then((rows) => rows);
	} catch({message}){
		return next({
			status: 500,
			message
		});
	}
	return res.json({user: user, list_users: list_users[0], list_logs: list_logs[0]});
};