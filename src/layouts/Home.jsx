import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TaiChi = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const BG = styled.div`
  height: 50%;
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
`

const TechBG = styled(BG)`
  background: black;
`

const DesignBG = styled(BG)`
  background: white;
`

const StyledLink = styled(Link)`
  font-size: 112px;
  font-family: Balthazar
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const TechLink = styled(StyledLink)`
  color: white;
`

const DesignLink = styled(StyledLink)`
  color: black
`

const Home = () => (
  <TaiChi>
    <TechBG>
      <TechLink to="/blogs/tech">TECH</TechLink>
    </TechBG>
    <DesignBG>
      <DesignLink to="/blogs/design">DESIGN</DesignLink>
    </DesignBG>
  </TaiChi>
);

export default Home;
