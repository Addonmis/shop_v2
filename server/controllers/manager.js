import maria from '../config/db';

import * as m_user from '../services/user';

export async function getManager(req, res, next){
	const {token} = req;

	try{
		var user = await m_user.getUserByToken(token);
		var list_ctg = await maria.query('call list_all_categories();').then((rows) => rows);
		var list_ctg_and_their_prop = await maria.query('call list_all_categories_and_their_properties();').then((rows) => rows);
		var list_prop_and_their_values = await maria.query('call list_all_properties_and_their_values();').then((rows) => rows);
	} catch({message}){
		return next({
			status: 500,
			message
		});
	}
	return res.json({user: user, ctg: list_ctg[0], list_ctg_prop: list_ctg_and_their_prop[0], list_prop_val: list_prop_and_their_values[0]});
};