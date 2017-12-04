import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

export default () => (
  <Link to="/">
    <Wrapper>
      <Image />
    </Wrapper>
  </Link>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
`;

const Image = styled.svg`
  background-image: url(${Logo});
  width: 65px;
  height: 65px;
  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 3px #333);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    filter: drop-shadow(6px 6px 6px #333);
    transition: all 200ms ease-in-out;
    transform: scale(1.1) rotate(-4.5deg);
  }
`;
