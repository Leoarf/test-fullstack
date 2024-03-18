import React from 'react';
import Link from 'next/link';
import { User } from '../utils/validationSchema';

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const formatCPF = (cpf: string) => {
    return cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  };

  const formatPhone = (phone: string) => {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo':
        return 'bg-green-600';
      case 'Inativo':
        return 'bg-red-600';
      case 'Aguardando ativação':
        return 'bg-yellow-600';
      case 'Desativado':
        return 'bg-gray-600';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="w-full">
      {users.map((user) => (
        <div
          className="border border-gray-200 mb-4 p-8 flex justify-between items-center"
          key={user.id}
        >
          <div className="w-1/4 pr-4">
            <p className="text-customTextUser font-semibold mb-1">
              {user.name}
            </p>
            <p className="text-customTextUser font-thin">{user.email}</p>
          </div>
          <div className="w-1/4 pr-4">
            <p className="text-customTextUser font-semibold mb-1">
              {formatCPF(user.cpf)}
            </p>
            <p className="text-customTextUser font-thin">
              {formatPhone(user.phone)}
            </p>
          </div>
          <div className="w-1/4 flex items-center pr-4">
            <span
              className={`h-3 w-3 rounded-full mr-2 ${getStatusColor(
                user.status
              )}`}
            ></span>
            <p className="text-customTextUser font-thin">{user.status}</p>
          </div>
          <div>
            <Link href={`/editclient/${user.id}`}>
              <button className="bg-white hover:bg-gray-300 text-orange-400 border border-orange-400 font-bold p-2 px-4 w-36 rounded">
                Editar
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTable;
