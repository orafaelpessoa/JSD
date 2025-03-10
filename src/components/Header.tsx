import React from 'react';

interface HeaderProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, isDarkMode }) => {
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

      <button onClick={onToggleDarkMode}>
        {isDarkMode ? 'Desativar Modo Escuro' : 'Ativar Modo Escuro'}
      </button>
    </header>
  );
};

export default Header;
