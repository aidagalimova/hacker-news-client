import { useState } from 'react';
import DOMPurify from 'dompurify';
import styled from 'styled-components';
import { Comment } from '../model/types/commentType';
import DropDown from 'shared/assets/icons/dropDown.svg?react';
import DropUp from 'shared/assets/icons/dropUp.svg?react';
import { PixelBalloon } from 'shared/styledComponents';
import { CommentsList } from './CommentsList';
import { Loader } from 'shared/ui/Loader';

interface CommentsItemProps {
  comment: Comment;
  isChild?: boolean;
}

export const CommentsItem = ({ comment, isChild = false }: CommentsItemProps) => {
  const hasComments = !!comment.comments.length;
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);

  const handleOpen = () => {
    setIsCommentsOpen((prev) => !prev);
    if (!isCommentsLoaded) {
      setTimeout(() => setIsCommentsLoaded(true), 500);
    }
  };

  const cleanContentHtml = { __html: DOMPurify.sanitize(comment.content) };

  return (
    <Container>
      <UserName>{comment.user}</UserName>
      <CommentContainer className={!isChild ? '' : 'reply'}>
        <CommentContent dangerouslySetInnerHTML={cleanContentHtml}></CommentContent>
        <CommentsCountContainer>
          {hasComments && (
            <CommentCount onClick={handleOpen}>
              {comment.commentsCount} comments
              {isCommentsOpen ? <DropUp /> : <DropDown />}
            </CommentCount>
          )}
        </CommentsCountContainer>
        {isCommentsOpen && !isCommentsLoaded && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        )}
        {isCommentsLoaded && <CommentsList comments={comment.comments} isChild isClosed={!isCommentsOpen} />}
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  width: 100%;
  padding-top: 28px;

  .reply {
    margin: 0;
    padding-right: 0;
    border-left: 2px solid ${(props) => props.theme.secondaryText};
    box-shadow: unset;
    &::after {
      box-shadow: unset;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    padding-top: 12px;
  }
`;

const CommentContainer = styled(PixelBalloon)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    padding: 4px 8px;
  }
`;

const UserName = styled.span`
  font-family: PressStart2P;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

const CommentContent = styled.span`
  font-family: monospace;
  font-size: 28px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 20px;
  }
`;

const CommentsCountContainer = styled.div`
  width: 100%;
  margin-top: 4px;
`;

const CommentCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 4px;
  font-family: PressStart2P;
  font-size: 20px;
  cursor: pointer;
  svg {
    width: 32px;
    height: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 16px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
const LoaderContainer = styled.div`
  align-self: center;
`;
