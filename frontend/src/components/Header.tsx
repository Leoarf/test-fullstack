import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => (
  <header className="bg-customGray text-white p-4 flex justify-center items-center">
    <Image src="/logouol.png" alt="logo" width={30} height={30} />
    <h1 className="font-black text-xl ml-1 tracking-tighter">UOL</h1>
  </header>
);

export default Header;
