import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

import ContentBlock from './ContentBlock.jsx';
import Loading from './Loading.jsx'

const Wrapper = styled.div`
  margin: 0px;
`

function Content({ data:{ getContentByCategory, loading }}) {
  if (loading) {
    return <p>loading now</p>
  } else {
    return (
      <Wrapper>
        {getContentByCategory.map((contentBlock) =>
          <ContentBlock key={contentBlock.month+contentBlock.year} contentBlock={contentBlock}/>
        )}
      </Wrapper>
    )
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
        category
      }
    }
  }
`

const ContentWithData = graphql(getContent, {
  options: (props) => ({
    variables: {
      category: 'technology'
    }
  })
})(Content);

export default ContentWithData;
