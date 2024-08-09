import React from 'react';
import { Icon } from 'semantic-ui-react';

import Layout from './Layout';

const NoMatch = () => {
  return (
    <Layout>
      <Icon name="minus circle" size="big" />
      <strong>Página não encontrada!</strong>
    </Layout>
  );
};

export default NoMatch;