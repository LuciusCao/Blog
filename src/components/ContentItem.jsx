import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentItem = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-item: flex-start;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 500;
  text-decoration: none;
  width: 100%;
  margin-left: 80px;
  margin-right: 24px;

  &:hover {
    text-decoration: underline;
  }
`

export default (props) => {
  <li>
    <ContentItem to={`/${props.category.toLowerCase()}/${props._id}`}>
      {props.title}
    </ContentItem>    
  </li>
}
