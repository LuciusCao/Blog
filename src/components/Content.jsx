import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, gql } from 'react-apollo';

import ContentBlock from './ContentBlock.jsx';

const Wrapper = styled.div`

`

function Content({ data, loading, errors}) {
  if (loading) {
    return <Loading />
  } else if (errors) {
    return <Errors />
  } else {
    return (
      <Wrapper>
        {data.getContentByCategory.map((contentBlock) =>
          <ContentBlock key={contentBlock.month+contentBlock.year} contentBlock={contentBlock}/>
        )}
      </Wrapper>
    )
  }
}

// class Content extends React.Component {
//   render() {
//     console.log(this.props.data);
//     const { data } = this.props;
//     <Wrapper>
//       {data.getContentByCategory.map((contentBlock) =>
//         <ContentBlock key={contentBlock.month+contentBlock.year} contentBlock={contentBlock}/>
//       )}
//     </Wrapper>
//   }
// }

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
