import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Header, Icon } from 'semantic-ui-react';

import { h1, pullRight } from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Feito com <Icon name="heart" color="red" /> por Esau Silva
      </p>
    </Container>
  );
};

export default Layout;