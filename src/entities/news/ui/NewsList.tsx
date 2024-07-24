import styled from 'styled-components';
import { NewsItem } from './NewsItem';
import { News } from '../model/types/newsType';

interface NewsListProps {
  news: News[];
}

export const NewsList = ({ news }: NewsListProps) => {
  return (
    <NewsContainer>
      {news.map((item) => (
        <li key={item.id}>
          <NewsItem news={item} />
        </li>
      ))}
    </NewsContainer>
  );
};

const NewsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  list-style: none;
`;
