import React from 'react';
import { Header } from 'semantic-ui-react';

import Layout from './Layout';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Página Dinâmica</Header>
      <p>Esta página foi carregada de forma assíncrona!!!</p>
    </Layout>
  );
};

export default DynamicPage;