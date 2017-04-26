import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContentItem from './ContentItem.jsx';

const BlockStyle = styled.div`

`

const MonthYear = styled.div`
  color: white;
`

export default class ContentBlock extends React.Componnet {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { month, year, articles } = this.props.contentBlock;

    <BlockStyle>
      <MonthYear>
        {month}, {year}
      </MonthYear>
      <UnstyledList>
        {articles.map((article) => <ContentItem key={article._id} article={article}/>)}
      </UnstyledList>
    </BlockStyle>
  }
}

ContentBlock.propTypes = {
  contentBlock: PropTypes.shape({
    month: PropTypes.string,
    year: PropTypes.string,
    articles: PropTypes.array,
  })
}
