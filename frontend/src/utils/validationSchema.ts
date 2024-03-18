import * as Yup from 'yup';

interface ValidationSchema {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
}

interface User {
  id?: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
}

const validationSchema: Yup.ObjectSchema<ValidationSchema> = Yup.object().shape(
  {
    name: Yup.string()
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        'Nome inválido, digite apenas letras.'
      )
      .required('Campo obrigatório.'),
    email: Yup.string()
      .email('Digite o email nesse padrão: email@gmail.com')
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        'E-mail inválido'
      )
      .required('Campo obrigatório.'),
    cpf: Yup.string()
      .matches(/^\d{11}$/, 'CPF inválido, digite apenas números.')
      .required('Campo obrigatório.'),
    phone: Yup.string()
      .matches(
        /^(1[1-9]|2[12478]|3([1-5]|[7-8])|4[1-9]|5(1|[3-5])|6[1-9]|7[134579]|8[1-9]|9[1-9])\d{8}$/,
        'Digite o número nesse padrão: 5512345678.'
      )
      .required('Campo obrigatório.'),
    status: Yup.string().required('Campo obrigatório.'),
  }
);

export { validationSchema };
export type { User };
