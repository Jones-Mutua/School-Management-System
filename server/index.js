

const express = require('express');
const cors = require('cors');
const mysql = require("mysql2");
// const router = require('./routes/examRoutes');
const database = require("./config/db.config");
const dotenv = require('dotenv')
// const exam = require('./Data/exam')
const cookieParser = require('cookie-parser');

const {readdirSync} = require('fs');





const app = express();
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());

// app.use('/', router);




console.log("All models were synchronized succ/apiessfully.");
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

app.listen(PORT, () => {
    console.log(`Server Running and Listening on Port ${PORT}`);
});


