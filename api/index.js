import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Server is running',
    status: 200,
    success: true,
    error: false
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is running on port  http://localhost:' + PORT);
});