const mysql = require('mysql2');

// MySQL 정보(?) 입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: '< MySQL username >',
  password: '< MySQL password >',
  database: 'my_db',
});

connection.connect();

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});
connection.end();
