import express from 'express';
import dotenv from 'dotenv';
import Universities from './data/universities.js';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.get('/api/universities', (req, res) => {
  res.json(Universities);
});

app.get('/api/universities/:id', (req, res) => {
  const university = Universities.find((p) => p._id === req.params.id);
  res.json(university);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
