import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ContentWithData from '../components/content.jsx';

const WindowHeight = window.innerHeight;

const TaiChi = styled.div`
  display: flex;
  flex-direction: row;
  height: ${WindowHeight}px;
`

const ToolBar = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Menu = styled.div`
  width: 360px;
  height: ${WindowHeight}px;
  background: black;
`

const ClickableArea = styled.div`
  height: 48px;
  width: 48px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconWrapper = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Back = styled(IconWrapper)`
  margin-left: 12px;
  margin-right: 32px;
`

const Drop = styled(IconWrapper)`
  margin-right: 12px;
`

const Header = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  height: 24px;
  width: 24px;
`

export default () => (
  <TaiChi>
    <Menu>
      <ToolBar>
        <Back>
          <Link to='/'>
            <ClickableArea>
              <Image src='.././assets/arrow-back.png'/>
            </ClickableArea>
          </Link>
        </Back>
        <Header>Category</Header>
        <Drop>
          <ClickableArea>
            <Image src='.././assets/arrow-drop.png'/>
          </ClickableArea>
        </Drop>
      </ToolBar>
      <ContentWithData/>
    </Menu>
  </TaiChi>
)
