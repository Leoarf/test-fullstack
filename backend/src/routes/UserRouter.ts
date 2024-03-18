import { Router } from 'express';
import {
  createUser,
  getAllUsers,
  updateUser,
} from '../controllers/UserController';
// import {
//   createUserValidationMiddleware,
//   updateUserValidationMiddleware,
// } from '../middlewares/userValidationMiddleware';

const UserRouter = Router();

UserRouter.get('/users', getAllUsers);
UserRouter.post('/users/create', createUser);
UserRouter.put('/users/:id', updateUser);

export default UserRouter;
