import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { uiActions } from 'features/ui/uiSlice';
import { CommentsList, commentApi } from 'entities/comments';
import { Loader } from 'widgets/Loader';
import { IconSize, Refresh } from 'widgets/Refresh';
import { PopUp } from 'widgets/PopUp';

interface CommentsProps {
  newsId: string;
}

const refreshInterfal = 60000;

const Comments = ({ newsId }: CommentsProps) => {
  const dispatch = useDispatch();
  const {
    data: comments,
    isLoading,
    error,
    refetch,
  } = commentApi.useGetCommentsByIdQuery(newsId, { pollingInterval: refreshInterfal });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return null;
  }

  const handleRefetch = () => {
    dispatch(uiActions.showPopUp());
    refetch();
  };

  return (
    <Container>
      {comments?.commentsCount ? (
        <>
          <TitleContainer>
            <Title>{comments.commentsCount} comments:</Title>
            <Refresh handleClick={handleRefetch} size={IconSize.Small} />
          </TitleContainer>
          <CommentsList comments={comments.comments} />
        </>
      ) : (
        <TitleContainer>
          <Empty>No comments yet</Empty>
          <Refresh handleClick={handleRefetch} size={IconSize.Small} />
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
`;

const Empty = styled.span`
  user-select: none;
  font-size: 20px;
  color: ${(props) => props.theme.secondaryText};
`;

export default Comments;
