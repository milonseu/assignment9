const express = require('express');
const cors = require('cors');
const connect = require('./src/connection.js');
const routes = require('./src/routes/book.js')
const app = express();
const port = process.env.PORT || 3000;
connect();//connection with database function

app.use(cors());
app.use(express.json());
app.use('/api',routes);


app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})