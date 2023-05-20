const express = require('express');
const app = express();

const propiedades = require('./routes/propiedades')

require('./db/connect');
require('dotenv').config();
const connectDB = require('./db/connect');

const port = 5000;

app.use(express.json())
app.use('/api/v1/propiedades', propiedades);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Running on port ${port}`))

    } catch (err) {
        console.log(err);
    }
}

start()
