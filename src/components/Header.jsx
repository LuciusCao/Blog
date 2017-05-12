import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ToolBar = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  margin-right: 20px;
`

const Drop = styled(IconWrapper)`
  margin-right: 12px;
`

const HeaderStyle = styled.div`
  font-size: 20px;
  font-family: Roboto;
  font-weight: 500;
  letter-spacing: 1.2px;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  height: 24px;
  width: 24px;
`

const Header = () => (
  <ToolBar>
    <Back>
      <Link to='/'>
        <ClickableArea>
          <Image src='.././assets/arrow-back.png'/>
        </ClickableArea>
      </Link>
    </Back>
    <HeaderStyle>Category</HeaderStyle>
    <Drop>
      <ClickableArea>
        <Image src='.././assets/arrow-drop.png'/>
      </ClickableArea>
    </Drop>
  </ToolBar>
)

export default Header;
