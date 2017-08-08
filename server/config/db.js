import mariadb from 'mariasql-promise';

const maria = new mariadb();

maria.connect({
  host: 'localhost',
  user: 'root',
  password: '',
  db: 'online_shop'
}).then(() => {
  console.log('connected');
});

export default maria;
