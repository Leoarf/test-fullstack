import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { ErrorCode } from '../errors/errorCodes';
import { errorMessages } from '../errors/errorsMessages';

const userService = new UserService();

export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res
      .status(500)
      .json({ message: errorMessages[ErrorCode.INTERNAL_SERVER_ERROR] });
  }
}

export async function createUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, cpf, phone, status } = req.body;
    const newUser = await userService.createUser({
      name,
      email,
      cpf,
      phone,
      status,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ message: errorMessages[ErrorCode.INTERNAL_SERVER_ERROR] });
  }
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { name, email, cpf, phone, status } = req.body;
    const updatedUser = await userService.updateUser(id, {
      name,
      email,
      cpf,
      phone,
      status,
    });
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res
      .status(500)
      .json({ message: errorMessages[ErrorCode.INTERNAL_SERVER_ERROR] });
  }
}
