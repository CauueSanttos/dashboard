import React from 'react';

import { Container } from './styles';

import Header from '../Header';
import Counters from '../Counters';

export default function Panel() {
  return (
    <Container>
      <Header />
      <Counters />
    </Container>
  );
}
