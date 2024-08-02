import styled from 'styled-components';
import { CommentsItem } from './CommentsItem';
import { Comment } from '../model/types/commentType';

interface CommentsProps {
  comments: Comment[];
  isChild?: boolean;
  isClosed?: boolean;
}

export const CommentsList = ({ comments, isChild, isClosed }: CommentsProps) => {
  return (
    <Container className={isClosed ? 'closed' : ''}>
      {comments.map((item) => (
        <li key={item.id}>
          <CommentsItem comment={item} isChild={isChild} />
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  &.closed {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    gap: 0px;
  }
`;
