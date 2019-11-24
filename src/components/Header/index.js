import React, { useState } from 'react';

import { Container } from './styles';

import { MdSearch, MdNotificationsNone } from 'react-icons/md';
import ModalNotify from '../ModalNotify';

export default function Header() {
  const [isShowAreaNotify, setShowAreaNotify] = useState(false);

  function handleShowAreaNotify(show) {
    setShowAreaNotify(show);
  }

  return (
    <Container>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div>
        <button>
          <MdSearch size={20} color="#FFF" />
        </button>
        <button onClick={() => handleShowAreaNotify(!isShowAreaNotify)}>
          <MdNotificationsNone size={20} color="#FFF" />
        </button>
        <img id="avatar" src="https://avatars1.githubusercontent.com/u/38498938?v=4" alt="Avatar" />
      </div>
      {isShowAreaNotify && (
        <ModalNotify />
      )}
    </Container>
  );
}
