import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>JSD Telecomunicações</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#empresa">A Empresa</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
