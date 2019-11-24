import React from 'react';

import { Container } from './styles';

export default function Notify({ urlImg, message, hour }) {
  return (
    <Container>
      <div>
        <img className="imgNotify" src={urlImg} alt="" />
      </div>
      <div className="notify">
        <h4>{message}</h4>
        <h5>{hour}</h5>
      </div>
    </Container>
  );
}
