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

  if (isLoading && !news) {
    return <Loader />;
  }

  return (
    <Container>
      <BackLink />
      {news && (
        <>
          <News news={news} />
          <Comments newsId={id} />
        </>
      )}
      {error && !news && <Error />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default FullNews;
