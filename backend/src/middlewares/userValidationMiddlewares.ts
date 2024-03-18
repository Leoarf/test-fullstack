import { Request, Response, NextFunction } from 'express';
import { nameRegex, emailRegex, cpfRegex, phoneRegex } from '../regex/regex';
const validStatus = ['Ativado', 'Desativado', 'Aguardando ativação', 'Inativo'];

export const createUserValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, cpf, phone, status } = req.body;
  const errors: string[] = [];

  if (!name || !name.match(nameRegex)) {
    errors.push('Nome inválido, digite apenas letras.');
  }
  if (!email || !email.match(emailRegex)) {
    errors.push('E-mail inválido');
  }
  if (!cpf || !cpf.match(cpfRegex)) {
    errors.push('CPF inválido, digite apenas números.');
  }
  if (!phone || !phone.match(phoneRegex)) {
    errors.push('Digite o número nesse padrão: 5512345678.');
  }
  if (!status || !validStatus.includes(status)) {
    errors.push('Status inválido.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

export const updateUserValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name, email, cpf, phone, status } = req.body;
  const errors: string[] = [];

  if (!id) {
    errors.push('ID obrigatório.');
  }
  if (!name || !name.match(nameRegex)) {
    errors.push('Nome inválido, digite apenas letras.');
  }
  if (!email || !email.match(emailRegex)) {
    errors.push('E-mail inválido');
  }
  if (!cpf || !cpf.match(cpfRegex)) {
    errors.push('CPF inválido, digite apenas números.');
  }
  if (!phone || !phone.match(phoneRegex)) {
    errors.push('Número de telefone inválido.');
  }
  if (!status || !validStatus.includes(status)) {
    errors.push('Status inválido.');
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};
