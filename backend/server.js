// const express = require('express');
// const dotenv = require('dotenv');
import express from  'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
// import Tinu from './db/ConnetToMongoDb.js';

dotenv.config();
const PORT = process.env.port || 5000;

// const dbConnection = process.env.Mongo_DB_URI;
// console.log('dbConnection: ', dbConnection);

const app = express();
app.use(express.json());

app.get('/', (req, resp) => {
    console.log('welcome tinu');
    resp.send('welcome to tinus-chat-api')
});

// app.use('/api/auth/', authRoutes);
app.listen(PORT, () => {
    // mongoDb.connect();
    console.log(`Server is started on port ${PORT}`);
});