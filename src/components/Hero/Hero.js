import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
      <>
        <Section row nopadding>
          <LeftSection>
            <SectionTitle main center>
              Welcome To <br />
              My Personal Portfolio
            </SectionTitle>
            <SectionText>
            Hi, I&apos;m Shammah a knowledge hungry and passion driven passion driven software engineer always striving to be better, I build secure backend api as well as stunning responsive websites
            </SectionText>
            <Button onClick={props.handleClick}>Contact me</Button>
          </LeftSection>
        </Section>
      </>

  // <Section row nopadding>
  //   <LeftSection>
  //     <SectionTitle main center>
  //       Hello There <br />
  //       Welcome to my Portfolio
  //     </SectionTitle>
  //     <SectionText>
  //       Hi, I&apos;m Shammah a knowledge hungry and passion driven passion 
  //         driven software engineer always striving to be better, I build secure backend api as well as stunning responsive websites
  //     </SectionText>
  //     <Button onClick={() => window.location ='https://gmailcom/shamaj2006@gmail.com'}>
  //       Contact me</Button>
  //   </LeftSection>
  // </Section>
);

export default Hero;