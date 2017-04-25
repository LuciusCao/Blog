import React from 'react';
import styled from 'styled-components';

import ContentItem from './ContentItem.jsx';

export default class ContentBlock extends React.Componnet {

  static propTypes = {
    articles: React.PropTypes.array
  }

  render() {
    <UnstyledList>
      {this.props.articles.map(article) => <ContentItem key={article._id} article={article}/>}
    </UnstyledList>
  }
  
}
