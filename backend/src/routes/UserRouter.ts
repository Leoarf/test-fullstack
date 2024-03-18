import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  updateUser,
} from '../controllers/UserController';
import {
  createUserValidationMiddleware,
  updateUserValidationMiddleware,
} from '../middlewares/userValidationMiddlewares';

const UserRouter = Router();

UserRouter.get('/users', getAllUsers);
UserRouter.post('/users/create', createUserValidationMiddleware, createUser);
UserRouter.put('/users/:id', updateUserValidationMiddleware, updateUser);

export default UserRouter;
