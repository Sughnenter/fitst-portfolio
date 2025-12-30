import React from 'react';
import Reveal from '../Framer/Reveal';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Website built and deployed' },
  { number: 35, text: 'Sites collaborated on', },
  { number: 10, text: 'Certifications', },
  { number: 10, text: 'Companies Worked for', }
];

const Acomplishments = () => (
  <Reveal>
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
    </Section>
  </Reveal>
);

export default Acomplishments;
