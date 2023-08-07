const mysql = require('mysql');

const databaseConnect = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"users"
});


const connectDB = ()=>{
    databaseConnect.connect((error)=>{
        if(error) return error;
        console.log("Database connected successfully")
    })
}

module.exports = {databaseConnect, connectDB}