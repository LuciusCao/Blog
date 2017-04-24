import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WindowHeight = window.screen.availHeight;

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

export default (props) => (
  <TaiChi>
    <Menu>
      <ToolBar>
        <Back>
          <ClickableArea>
            <Link to='/'>
              <img src='../../assests/arrow-back.png'></img>
            </Link>
          </ClickableArea>
        </Back>
        <Header>Category</Header>
        <Drop>
          <ClickableArea>
            <img src='../../assests/arrow-drop.png'></img>
          </ClickableArea>
        </Drop>
      </ToolBar>
    </Menu>
  </TaiChi>
)
