import React from 'react';

import { Container } from './styles';
import { MdApps, MdMailOutline, MdChat } from 'react-icons/md';

export default function Menu() {
  return (
    <Container>
      <ul>
        <li>
          <button type="danger">
            <MdApps size={18} color="#FFF" />
          </button>
        </li>
        <li>
          <button type="mail">
            <MdMailOutline size={18} color="#FFF" />
          </button>
        </li>
        <li>
          <button type="message">
            <MdChat size={18} color="#FFF" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
