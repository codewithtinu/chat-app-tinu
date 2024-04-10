import express from  'express';
import dotenv from 'dotenv';
import connectMongoDb from './db/ConnetToMongoDb.js';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();
const PORT = process.env.port || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());

// app.get('/', (req, resp) => {
//     console.log('welcome tinu');
//     resp.send('welcome to tinus-chat-api')
// });
// https:localhost:2905/api/auth/signin

app.use('/api/auth/', authRoutes);
app.use('/api/messages/', messageRoutes);
app.use('/api/users/', userRoutes);

app.listen(PORT, () => {
    connectMongoDb();
    console.log(`Server is started on port ${PORT}`);
});