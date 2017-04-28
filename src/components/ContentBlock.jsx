import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContentItem from './ContentItem.jsx';

const numToMon = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

const BlockStyle = styled.div`

`

const MonthYear = styled.div`
  color: white;
`

export default ({ month, year, posts }) => {
  return (
    <BlockStyle>
      <MonthYear>
        {month}, {year}
      </MonthYear>
      <UnstyledList>
        {posts.map((post) => <ContentItem key={post._id} post={post}/>)}
      </UnstyledList>
    </BlockStyle>
  )
}

// export default class ContentBlock extends React.Component {
//   render() {
//     const { month, year, posts } = this.props.contentBlock;
//
//     <BlockStyle>
//       <MonthYear>
//         {month}, {year}
//       </MonthYear>
//       <UnstyledList>
//         {posts.map((post) => <ContentItem key={post._id} post={post}/>)}
//       </UnstyledList>
//     </BlockStyle>
//   }
// }

ContentBlock.propTypes = {
  contentBlock: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
    posts: PropTypes.array,
  })
}
