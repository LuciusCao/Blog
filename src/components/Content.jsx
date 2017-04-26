import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

import ContentBlock from './ContentBlock.jsx';

const Wrapper = styled.div`

`

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.data.getContentByCategory;
    <Wrapper>
      {data.map((contentBlock) =>
        <ContentBlock key={contentBlock.month+contentBlock.year} contentBlock={contentBlock}/>
      )}
    </Wrapper>
  }
}

const getContent = gql`
  query contentQuery($category: String) {
    getContentByCategory(category: $category) {
      year
      month
      posts {
        _id
        title
      }
    }
  }
`

const ContentWithData = graphql(getContent)(Content);

export default ContentWithData;
