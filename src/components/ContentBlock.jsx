import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContentItem from './ContentItem.jsx';

const BlockStyle = styled.div`
  padding-bottom: 24px;
`

const MonthYear = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  color: white;
  margin-right: 24px;
  padding-bottom:12px;
  letter-spacing: 0.7px;
`

const UnstyledList = styled.div`
`

export default ContentBlock = (props) => {
  const { month, year, posts } = props.contentBlock;
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
  };

  return (
    <BlockStyle>
      <MonthYear>
        {numToMon[month]}, {year}
      </MonthYear>
      <UnstyledList>
        {posts.map((post) => <ContentItem key={post._id} post={post}/>)}
      </UnstyledList>
    </BlockStyle>
  )
}

ContentBlock.propTypes = {
  contentBlock: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
    posts: PropTypes.array,
  })
}
