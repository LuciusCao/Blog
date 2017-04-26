import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ContentStyle = styled(Link)`
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
  color: white;

  &:hover {
    text-decoration: underline;
  }
`

export default class ContentItem extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { _id, category, title } = this.props.article;

    return (
      <ContentStyle to={`/${category.toLowerCase()}/${_id}`}>
        {title}
      </ContentStyle>
    )
  }
}

ContentItem.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }),
}
