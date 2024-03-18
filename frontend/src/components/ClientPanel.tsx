import React from 'react';
import Image from 'next/image';

const ClientPanel: React.FC = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-20">
        <div className="flex items-center mb-5">
          <Image
            src="/profile-icon.png"
            alt="profile-icon"
            width={40}
            height={40}
          />
          <h2 className="text-3xl text-customTitlePanel ml-5">
            Painel de clientes
          </h2>
        </div>
        <hr className="mb-5" />
      </div>
    </>
  );
};

export default ClientPanel;
