// Editclient.jsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ClientPanel from '../../components/ClientPanel';
import FormikForm from '../../components/FormikForm';
import Header from '../../components/Header';
import { User, validationSchema } from '../../utils/validationSchema';
import { Formik } from 'formik';
import axios from 'axios';

const Editclient: React.FC = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const { id } = router.query;
    if (id === 'create') {
      setUserId(null);
      setIsEditing(false);
    } else {
      const isValidId = /^\d+$/.test(id as string);
      if (isValidId) {
        setUserId(id as string);
        setIsEditing(true);
      } else {
        router.push('/404');
      }
    }
  }, [router, router.query]);

  const handleSubmit = async (values: User) => {
    try {
      const backendURL =
        process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
      const url = userId
        ? `${backendURL}/users/${userId}`
        : `${backendURL}/users/create`;
      const method = userId ? 'PUT' : 'POST';
      await axios({
        method,
        url,
        data: values,
      });
      router.push('/');
    } catch (error) {
      console.error('Erro(s) ao criar ou atualizar o usuário:', error);
    }
  };

  return (
    <>
      <Header />
      <ClientPanel />
      <Formik
        initialValues={{
          name: '',
          email: '',
          cpf: '',
          phone: '',
          status: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {isEditing ? (
          <FormikForm isEditing={true} />
        ) : (
          <FormikForm isEditing={false} />
        )}
      </Formik>
    </>
  );
};

export default Editclient;
