import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Olá Mundo do React e Webpack! Teste</p>
      <p>
        <Link to="/dynamic">Navegar para a Página Dinâmica</Link>
      </p>
    </Layout>
  );
};

export default Home;