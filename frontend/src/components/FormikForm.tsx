import { Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import Link from 'next/link';

interface FormikFormProps {
  isEditing: boolean;
}

const FormikForm: React.FC<FormikFormProps> = ({ isEditing }) => {
  const renderFormField = (
    type: string,
    id: string,
    name: string,
    placeholder: string
  ) => (
    <>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="block bg-white mt-1 p-4 border border-gray-400 rounded-md max-w-270 w-full mb-4"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </>
  );

  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-xl text-customTextUser font-semibold mb-3">
        {isEditing ? 'Editar usuário' : 'Novo usuário'}
      </h3>
      <p className="text-customTextUser text-lg font-thin mb-12">
        Informe os campos a seguir para
        {isEditing ? ' editar o usuário.' : ' criar um novo usuário.'}
      </p>
      <Form>
        {renderFormField('text', 'name', 'name', 'Nome')}
        {renderFormField('email', 'email', 'email', 'E-mail')}
        {renderFormField('text', 'cpf', 'cpf', 'CPF')}
        {renderFormField('text', 'phone', 'phone', 'Telefone')}
        <>
          <Field
            as="select"
            id="status"
            name="status"
            className="block bg-white mt-1 p-4 border border-gray-400 rounded-md max-w-270 w-full mb-4"
          >
            <option value="" selected hidden>
              Status
            </option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Aguardando ativação">Aguardando ativação</option>
            <option value="Desativado">Desativado</option>
          </Field>
          <ErrorMessage
            name="status"
            component="div"
            className="text-red-500 text-xs mt-1"
          />
        </>
        <>
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-700 text-white font-bold p-3 mb-14 mt-14 mr-5 rounded w-138"
          >
            {isEditing ? 'Editar' : 'Criar'}
          </button>
          <Link href="/">
            <button
              type="button"
              className="bg-white hover:bg-gray-300 text-orange-400 border border-orange-400 font-bold p-3 mb-14 mt-14 rounded w-138"
            >
              Voltar
            </button>
          </Link>
        </>
      </Form>
    </div>
  );
};

export default FormikForm;
