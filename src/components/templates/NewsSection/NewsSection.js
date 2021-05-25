import React, { useState, useEffect } from 'react';
import { ArticleWrapper, Wrapper, TitleWrapper, ContentWrapper } from '../NewsSection/NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = 'e7ed2e48e25d6a4f8d3786d2a2ae0b';
// const data = [
//   {
//     title: 'News feed section',
//     category: 'Tech news',
//     content: 'lorem Amet et sit qui aliqua nisi tempor ex dolore esse.',
//     image: null,
//   },
//   {
//     title: 'News feed section2',
//     category: 'Tech news',
//     content: 'lorem Amet et sit qui aliqua nisi tempor ex dolore esse.',
//     image: 'https://unsplash.it/500/400',
//   },
//   {
//     title: 'News feed section3',
//     category: 'Tech news',
//     content: 'lorem Amet et sit qui aliqua nisi tempor ex dolore esse.',
//     image: null,
//   },
// ];

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.post(
      'https://graphql.datocms.com/',
      {},
      {
        headers: {
          authorization: `bearer ${API_TOKEN}`,
        },
      }
    );
  });
  return (
    <Wrapper>
      <h2>News feed section</h2>
      {articles.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article_imgae" /> : null}
          </ContentWrapper>

          <Button isBig>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};
export default NewsSection;
