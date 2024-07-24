import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { uiActions } from 'features/ui/uiSlice';
import { NewsList, newsApi } from 'entities/news';
import { Loader } from 'widgets/Loader';
import { Refresh } from 'widgets/Refresh';
import { PopUp } from 'widgets/PopUp';

const refreshInterfal = 60000;

const AllNews = () => {
  const dispatch = useDispatch();
  const {
    data: news,
    isLoading,
    error,
    refetch,
  } = newsApi.useGetAllNewsQuery(undefined, { pollingInterval: refreshInterfal });

  if (error && 'data' in error && typeof error.data === 'string') {
    return <div>{error.data}</div>;
  }
  const handleRefetch = () => {
    dispatch(uiActions.showPopUp());
    refetch();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Newest</Title>
        <Refresh handleClick={handleRefetch} />
      </TitleContainer>
      {news && <NewsList news={news} />}
      {isLoading && <Loader />}
      <PopUp content="Refreshed" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

const Title = styled.span`
  font-size: 30px;
`;

export default AllNews;
