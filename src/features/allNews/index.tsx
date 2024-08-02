import styled from 'styled-components';
import { useAppDispatch } from 'app/store';
import { NewsList, newsApi } from 'entities/news';
import { Loader } from 'shared/ui/Loader';
import { Refresh } from 'shared/ui/Refresh';
import { PopUp } from 'shared/ui/PopUp';
import { Error } from 'shared/ui/ErrorMessage';
import { uiActions } from 'shared/uiSlice';
import { refreshInterfal } from 'shared/const/api';

const AllNews = () => {
  const dispatch = useAppDispatch();
  const {
    data: news,
    isLoading,
    isFetching,
    error,
    refetch,
  } = newsApi.useGetAllNewsQuery(undefined, { pollingInterval: refreshInterfal });

  const handleRefetch = () => {
    dispatch(uiActions.showPopUp());
    refetch();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Newest</Title>
        <Refresh isFetching={isFetching} handleClick={handleRefetch} />
      </TitleContainer>
      {news && <NewsList news={news} />}
      {error && <Error />}
      {isLoading && <Loader />}
      <PopUp content="Refreshed" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    gap: 24px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    gap: 16px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const Title = styled.span`
  font-size: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }
`;

export default AllNews;
