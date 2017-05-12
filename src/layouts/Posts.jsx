import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/Header.jsx';
import ContentWithData from '../components/Content.jsx';

const TaiChi = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 100%;
  background: black;
`

const Posts = () => (
  <TaiChi>
    <Menu>
      <Header/>
      <ContentWithData/>
    </Menu>
  </TaiChi>
)

export default Posts;
