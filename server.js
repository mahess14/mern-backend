import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);

mongoose.connect("mongodb://localhost:27017/mern-app", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('✅ Server running on http://localhost:5000')))
  .catch((err) => console.error('❌ DB Error:', err));
