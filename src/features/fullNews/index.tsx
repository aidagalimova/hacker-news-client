import styled from 'styled-components';
import Comments from 'features/comments';
import { News, newsApi } from 'entities/news';
import { Loader } from 'shared/ui/Loader';
import { BackLink } from 'shared/ui/BackLink';
import { Error } from 'shared/ui/ErrorMessage';
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
      <BackLink />
      {error && <Error />}
      {news && <News news={news} />}
      {!error && <Comments newsId={id} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default FullNews;
