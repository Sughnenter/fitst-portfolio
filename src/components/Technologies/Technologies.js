import React from 'react';
import { DiFirebase, DiReact, DiZend, DiDjango, DiPython } from 'react-icons/di';
import Reveal from '../Framer/Reveal';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Reveal>
    <Section id='tech'>
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've Worked with a range of Technologies in the software development world From Back-end to design
      </SectionText>
      <List>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Django and databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React Js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size="3rem" />
          <ListContainer>
            <ListTitle>Python</ListTitle>
            <ListParagraph>
              Experience writing scripts <br />
              With Python
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </Reveal>
);

export default Technologies;
