import styled from 'styled-components';
import { CommentsItem } from './CommentsItem';
import { Comment } from '../model/types/commentType';

interface CommentsProps {
  comments: Comment[];
}

export const CommentsList = ({ comments }: CommentsProps) => {
  return (
    <Container>
      {comments.map((item) => (
        <li key={item.id}>
          <CommentsItem comment={item} />
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
`;
