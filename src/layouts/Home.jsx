import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WindowHeight = window.screen.availHeight;

const TaiChi = styled.div`
  height: ${WindowHeight}px;
  display: flex;
  flex-direction: column;
`

const TechBG = styled.div`
  height: 50%;
  width: 100%;
  background: black;
  display:flex;
  justify-content: center;
  align-items: center
`

const DesignBG = styled.div`
  height: 50%;
  width: 100%;
  background: white;
  display:flex;
  justify-content: center;
  align-items: center
`

const TechLink = styled(Link)`
  color: white;
  justify-content: center;
  align-item: center;
  font-size: 72px;
`

const DesignLink = styled(Link)`
  color: black;
  justify-content: center;
  align-item: center;
  font-size: 72px;
`

export default () => (
  <TaiChi>
    <TechBG>
      <TechLink to="/blogs/tech">TECH</TechLink>
    </TechBG>
    <DesignBG>
      <DesignLink to="/blogs/design">DESIGN</DesignLink>
    </DesignBG>
  </TaiChi>
);
