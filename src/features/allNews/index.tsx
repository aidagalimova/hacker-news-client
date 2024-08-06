import styled from 'styled-components';
import { useAppDispatch } from 'app/store';
import { NewsList, NewsType, newsApi } from 'entities/news';
import { Loader } from 'shared/ui/Loader';
import { Refresh } from 'shared/ui/Refresh';
import { PopUp } from 'shared/ui/PopUp';
import { Error } from 'shared/ui/ErrorMessage';
import { uiActions } from 'shared/uiSlice';
import { refreshInterfal } from 'shared/const/api';

interface DisplayedContentProps {
  news: NewsType[] | undefined;
  error: boolean;
  isLoading: boolean;
}

const DisplayedContent = ({ news, error, isLoading }: DisplayedContentProps) => {
  if (news) {
    return <NewsList news={news} />;
  }
  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return null;
};

const AllNews = () => {
  const dispatch = useAppDispatch();
  const {
    data: news,
    isLoading,
    isFetching,
    error,
    refetch,
  } = newsApi.useGetAllNewsQuery({}, { pollingInterval: refreshInterfal });

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
      <DisplayedContent news={news} isLoading={isLoading} error={!!error} />
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

const Title = styled.h2`
  font-size: 30px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }
`;

export default AllNews;
