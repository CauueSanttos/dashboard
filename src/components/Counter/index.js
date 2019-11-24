import React from 'react';

import { Container } from './styles';
import { MdArrowDropUp } from 'react-icons/md';

export default function Counter({ iconTop, colorArrow, number, description, iconChart }) {
  return (
    <Container>
      <div className="icon-arrow">
        {iconTop}
        <MdArrowDropUp size={18} color={colorArrow} />
      </div>
      <div className="counter">
        <h1>{number}</h1>
      </div>
      <div className="description">
        {description}
      </div>
      <div className="graphic">
        {iconChart}
      </div>
    </Container>
  );
}
