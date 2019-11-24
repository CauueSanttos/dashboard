import React from 'react';

import { Container } from './styles';

import Menu from '../Menu';
import Panel from '../Panel';

export default function Dashboard() {
  return (
    <Container>
      <Menu />
      <Panel />
    </Container>
  );
}
