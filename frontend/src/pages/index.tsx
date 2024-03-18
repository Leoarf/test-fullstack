import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '@/components/Header';
import ClientPanel from '@/components/ClientPanel';
import UserTable from '@/components/UserTable';
import { User } from '@/utils/validationSchema';

const Index: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get<User[]>('http://localhost:4000/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro(s) ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <ClientPanel />
      <div className="max-w-5xl mx-auto mt-8">
        <div className="flex justify-between mb-5">
          <div>
            <h3 className="text-xl text-customTextUser font-semibold mb-3">
              Listagem de usuários
            </h3>
            <p className="text-customTextUser text-lg font-thin">
              Escolha um cliente para visualizar os detalhes
            </p>
          </div>
          <Link href="/editclient/create">
            <button
              type="button"
              className="bg-orange-400 hover:bg-orange-700 text-white text-sm p-2 rounded mr-10 mt-1.5 h-9 w-24"
            >
              Novo cliente
            </button>
          </Link>
        </div>
        <UserTable users={users} />
      </div>
    </>
  );
};

export default Index;
