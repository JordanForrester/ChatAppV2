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

    async queryDatabase(connection, queryString){//Not Working

        connection.connect((err) => {
            if (err) throw err;
            console.log('Connected!');

            connection.query(queryString, function (err, result, fields) {
                if (err) throw err;
                console.log(result);
              });
            
          });
    },

    async createUser(connection, data){// Convert Data to String at Some Point
         connection.connect(
            async (err) => {
                if (err) throw err;

                try {
                    const sql = 'INSERT INTO `user`(`pword`, `email`, `phonenumber`, `yearofbirth`, `username`) VALUES (?, ?, ?, ?, ?)';
                    const values = [data.password, data.email, data.number, data.birthyear, data.username];

                  
                    result = await connection.execute(
                      sql,
                      values,
                      (err, results) =>{
                        if (err) {
                          console.error('Error inserting data: ', err);
                        } else {
                          console.log('Inserted row with ID: ', results);
                        }


                      },
                      // ... other options
                    );
                  
                    console.log(result);
                    
                  } catch (err) {
                    console.log(err);
                  }




                
                
            }
        );
    }

}


module.exports =  databaseLibrary;






