import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Comments from 'features/comments';
import { News, newsApi } from 'entities/news';
import { Loader } from 'widgets/Loader';

interface NewsProps {
  id: string;
}

const FullNews = ({ id }: NewsProps) => {
  const { data: news, isLoading, error } = newsApi.useGetNewsByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Back>
        <Link to={'/'}>&#x2190; Back</Link>
      </Back>
      {error && 'data' in error && typeof error.data === 'string' && <div>{error.data}</div>}
      {news && <News news={news} />}
      <Comments newsId={id} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Back = styled.div`
  a {
    user-select: none;
    text-decoration: none;
    color: ${(props) => props.theme.secondaryText};
    cursor: pointer;
    &:visited {
      color: unset;
    }
    &:hover {
      color: ${(props) => props.theme.secondaryHover};
    }
  }
`;

export default FullNews;
