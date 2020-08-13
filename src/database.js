const mysql = require('mysql')

const mysqlConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_prueba'
});

mysqlConection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('conected');

});

module.exports = mysqlConection;