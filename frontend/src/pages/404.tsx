import React from 'react';
import Link from 'next/link';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">404 - Página não encontrada</h1>
      <p className="text-xl mb-6">
        Não digite diretamente na URL ou atualize a página de edição, use apenas
        os botões!
      </p>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Voltar para a tela inicial
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
