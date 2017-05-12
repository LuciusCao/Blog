import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentStyle = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-item: flex-start;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  text-decoration: none;
  margin-left: 80px;
  margin-right: 24px;
  color: white;
  padding-bottom: 12px;
  opacity: 0.7;
  letter-spacing: 0.7px;

  &:hover {
    text-decoration: underline;
    opacity: 1;
  }
`

const ContentItem = (props) => {
  const { _id, category, title } = props.post
  return (
    <ContentStyle to={`/${category.toLowerCase()}/${title}`} id={_id}>
      {title}
    </ContentStyle>
  )
}

ContentItem.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default ContentItem;
