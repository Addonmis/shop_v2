import express from 'express';
import path from 'path';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import history from 'connect-history-api-fallback';
import config from './config';
import webpackConfig from './config/webpackConfig';

const app = express();

app.listen(config.port, err => {
  if (err) throw err;

  console.log(`Server listening on port ${config.port}`);
});

app.use("/dist", express.static('dist'));
app.use(history());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

webpackConfig(app);

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "../index.html"));
});
