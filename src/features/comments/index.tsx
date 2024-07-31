import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CommentsList, commentApi } from 'entities/comments';
import { Loader } from 'widgets/Loader';
import { IconSize, Refresh } from 'widgets/Refresh';
import { PopUp } from 'widgets/PopUp';
import { uiActions } from 'widgets/uiSlice';
import { refreshInterfal } from 'shared/const/api';

interface CommentsProps {
  newsId: string;
}

const Comments = ({ newsId }: CommentsProps) => {
  const dispatch = useDispatch();
  const {
    data: comments,
    isLoading,
    isFetching,
    error,
    refetch,
  } = commentApi.useGetCommentsByIdQuery(newsId, { pollingInterval: refreshInterfal });

  if (isLoading) {
    return <Loader />;
  }

  const handleRefetch = () => {
    dispatch(uiActions.showPopUp());
    refetch();
  };

  const CommentRefresh = () => <Refresh isFetching={isFetching} handleClick={handleRefetch} size={IconSize.Small} />;

  if (error) {
    return (
      <ErrorContainer>
        <span>Something went wrong</span>
        <CommentRefresh />
      </ErrorContainer>
    );
  }

  return (
    <Container>
      {comments?.commentsCount ? (
        <>
          <TitleContainer>
            <Title>{comments.commentsCount} comments:</Title>
            <CommentRefresh />
          </TitleContainer>
          <CommentsList comments={comments.comments} />
        </>
      ) : (
        <TitleContainer>
          <Empty>No comments yet</Empty>
          <CommentRefresh />
        </TitleContainer>
      )}
      <PopUp content="Refreshed" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    gap: 0px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.primaryBg};
`;

const Title = styled.span`
  user-select: none;
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

const Empty = styled.span`
  user-select: none;
  font-size: 20px;
  color: ${(props) => props.theme.secondaryText};
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export default Comments;
