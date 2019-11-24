import React from 'react';

import { Container } from './styles';
import Notify from '../Notify';

export default function ModalNotify() {
  return (
    <Container>
      <Notify
        urlImg="https://avatars3.githubusercontent.com/u/48870801?s=460&v=4"
        message="Vinicius sent you a message!"
        hour="10 Minutes ago"
      />
      <Notify
        urlImg="https://api.adorable.io/avatars/285/abott@adorable.png"
        message="Joe Added you as friend."
        hour="2 Hours ago"
      />
      <Notify
        urlImg="https://api.adorable.io/avatars/285/abott@adorable.io.png"
        message="Use awesome animate.css!"
        hour="1 Day ago"
      />
    </Container>
  );
}
