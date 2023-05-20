const express = require('express');
const cors =require('cors')
const app = express();

const propiedades = require('./routes/propiedades')

require('./db/connect');
require('dotenv').config();
const connectDB = require('./db/connect');

const port = process.env.PORT || 8888;

app.use(express.json());
app.use(cors())
app.use('/api/v1/propiedades', propiedades);

app.get('/', (req, res) => {
    res.send('Real Estate propiedades API')
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Running on port ${port}`))

    } catch (err) {
        console.log(err);
    }
}

start()
