import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/User.route.js';
dotenv.config();

// database configuration
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
  console.log('Database connected');
});

const app = express();
app.use(express.json());

// configure routes
app.use("/api/test", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port  http://localhost:' + PORT);
});