import maria from '../config/db';

export async function getAllItems(req, res, next){
  try{
    var items = await maria.query('call list_all_products();').then((rows) => rows);
  } catch({message}){
      return next({
        status: 500,
        message
      });
  }
  res.json({items});
};
