import maria from '../config/db';

export async function getProduct(req, res, next){
	const id_product = req.params.id_product;
	try{
		var item = await maria.query('call show_product(?);', [id_product]).then((rows) => rows);
	} catch({message}){
      return next({
        status: 500,
        message
      });
  }
  res.json({item});
};
