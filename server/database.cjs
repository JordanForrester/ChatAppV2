const mysql = require('./node_modules/mysql2');
// This code can be optimized //
const databaseLibrary = {
     createConnection(){

        return  mysql.createConnection({//Eventually get this data from txt file
            host: 'localhost',
            user: 'root',
            password: '!10JanetJ',
            database: 'chatapp'
          });

          
    },

    queryDatabase(connection, queryString){

        connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');

            connection.query(queryString, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
              });
            
          });
    },

    createUser(connection, data){// Convert Data to String at Some Point
         connection.connect(
            (err) => {
                if (err) throw err;
                queryString = "INSERT INTO user VALUES(" + data.password + " ," + data.email + 
                "," + data.number + "," + data.username + ");"
                console.log(queryString) 
                return connection.query(queryString, 
                    (err, result) => {
                        if (err) throw err;
                        return result;
                    }   
                );
            }
        );
    }

}


module.exports =  databaseLibrary;






