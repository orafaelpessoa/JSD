import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contato</h2>
      <p>Entre em contato conosco através dos seguintes canais:</p>
      <ul>
        <li>Email: <a href="mailto:contato@jsdtelecom.com.br">contato@jsdtelecom.com.br</a></li>
        <li>Telefone: (11) 1234-5678</li>
        <li>Endereço: Rua Exemplo, 123 - São Paulo, SP</li>
      </ul>
    </section>
  );
};

export default Contact;
