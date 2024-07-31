import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../model/types/commentType';
import { ReactComponent as DropDown } from 'shared/assets/icons/dropDown.svg';
import { ReactComponent as DropUp } from 'shared/assets/icons/dropUp.svg';
import { PixelBalloon } from 'shared/styledComponents';
import { CommentsList } from './CommentsList';

interface CommentsItemProps {
  comment: Comment;
  isChild?: boolean;
}

export const CommentsItem = ({ comment, isChild }: CommentsItemProps) => {
  const isHaveComments = !!comment.comments.length;
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <Container>
      <UserName>{comment.user}</UserName>
      <CommentContainer className={!isChild ? '' : 'reply'}>
        <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }}></CommentContent>
        <CommentsCountContainer>
          {isHaveComments && (
            <CommentCount onClick={() => setIsCommentsOpen((prev) => !prev)}>
              {comment.comments.length} comments
              {isCommentsOpen ? <DropUp /> : <DropDown />}
            </CommentCount>
          )}
        </CommentsCountContainer>
        {isCommentsOpen && isHaveComments && <CommentsList comments={comment.comments} isChild />}
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
