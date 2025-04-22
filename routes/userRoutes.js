import express from 'express';
import { getUsers, updateUser, login, register } from '../controllers/userController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// 👇 Protected routes
router.get('/users', authMiddleware, getUsers);
router.put('/users/:id', authMiddleware, updateUser);

export default router;
