// const express = require('express');
// const dotenv = require('dotenv');
import express from  'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectMongoDb from './db/ConnetToMongoDb.js';
// import Tinu from './db/ConnetToMongoDb.js';

dotenv.config();
const PORT = process.env.port || 5000;

// const dbConnection = process.env.Mongo_DB_URI;
// console.log('dbConnection: ', dbConnection);

const app = express();
app.use(express.json());

// app.get('/', (req, resp) => {
//     console.log('welcome tinu');
//     resp.send('welcome to tinus-chat-api')
// });
// https:localhost:2905/api/auth/signin
app.use('/api/auth/', authRoutes);
app.use('/api/message/', messageRoutes);

app.listen(PORT, () => {
    connectMongoDb();
    console.log(`Server is started on port ${PORT}`);
});