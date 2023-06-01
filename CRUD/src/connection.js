require('dotenv').config();
const mongoose = require('mongoose');
const db_url =process.env.DB_URL;

const connect = ()=>{
    mongoose.connect(db_url).then(()=>{
        console.log("Database has connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=connect;