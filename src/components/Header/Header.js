import Link from 'next/link';
import React from 'react';
import Reveal from '../Framer/Reveal';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Reveal>
    <Container>
      <Div1>
        <Link legacyBehavior href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: "20" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link legacyBehavior href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/sughnenter">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/shammah-johnson-47a2772b3/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/cancelledynv">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://x.com/fantasticc_4">
          <AiFillTwitterCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </Reveal>
);

export default Header;
