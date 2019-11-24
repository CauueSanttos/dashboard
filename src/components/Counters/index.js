import React from 'react';

import { Container } from './styles';
import { MdDashboard, MdDescription, MdPieChart, MdSend, MdShowChart, MdTimeline, MdMultilineChart, MdTrendingDown } from 'react-icons/md';

import Counter from '../Counter';

export default function Counters() {
  return (
    <Container>
      <Counter
        iconTop={<MdDashboard size={18} color="gray" />}
        colorArrow="aqua"
        number="45"
        description="New Projects"
        iconChart={<MdTimeline size={40} color="gray" />}
      />
      <Counter
        iconTop={<MdDescription size={18} color="gray" />}
        colorArrow="aqua"
        number="219"
        description="New Invoices"
        iconChart={<MdShowChart size={40} color="gray" />}
      />
      <Counter
        iconTop={<MdPieChart size={18} color="gray" />}
        colorArrow="red"
        number="8"
        description="New Quotes"
        iconChart={<MdTrendingDown size={40} color="gray" />}
      />
      <Counter
        iconTop={<MdSend size={18} color="gray" />}
        colorArrow="aqua"
        number="36"
        description="New Compains"
        iconChart={<MdMultilineChart size={40} color="gray" />}
      />
    </Container>
  );
}
