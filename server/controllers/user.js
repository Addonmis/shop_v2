import maria from '../config/db';

import * as m_user from '../services/user';

export async function getUser(req, res, next){
	const {token} = req;

	try{
		var user = await m_user.getUserByToken(token);
		var items = await maria.query('call list_from_basket(?);', [user.id_user]).then((rows) => rows);
		var history = await maria.query('call list_history_orders(?);', [user.id_user]).then((rows) => rows);
	} catch({message}){
		return next({
			status: 500,
			message
		});
	}
	return res.json({user: user, items: items[0], history: history[0]});
};