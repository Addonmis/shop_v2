import bcrypt from 'bcrypt-as-promised';
import jwt from 'jsonwebtoken';

import * as validator from '../services/validator';
import config from '../config';
import maria from '../config/db';
// signin
export const signin = async (req, res, next) => {
	const {username, password} = req.body;
	if (!validator.validation(username, password).isValid){
		return next({
			status: 401,
			message: validator.validation(username, password).error
		});
	}
	const user = await maria.query('select * from users where username = ?', [username]).then((rows) => rows);
	if (!user.length){
		return next({
			status: 400,
			message: "user not found"
		});
	}
	try{
		const result = await bcrypt.compare(password, user[0].password);
	} catch(e){
		return next({
			status: 400,
			message: "bad credentials"
		});
	}
	const token = jwt.sign({_id: user[0].id_user}, config.secret);
	res.json({token: token, user_role: user[0].id_role});
};

// signup
export const signup = async (req, res, next) => {
	let user;
	if (!validator.validation(req.body.username, req.body.password).isValid){
		return next({
			status: 401,
			message: validator.validation(req.body.username, req.body.password).error
		});
	}
	try{
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(req.body.password, salt);

		await maria.query('insert into users(username, password, id_role) values(?, ?, 3);', [req.body.username, hash]);
		user = await maria.query('select id_user, username, password, id_role from users order by id_user desc limit 1;').then((rows) => rows);
	} catch({message}){
		return next({
			status: 400,
			message
		});
	}
	const token = jwt.sign({_id: user[0].id_user}, config.secret);
	res.json({token: token, user_role: user[0].id_role});
};