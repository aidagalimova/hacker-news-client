import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from '../model/types/commentType';
import { PixelBalloon } from 'features/ui/styledComponents';
import { ReactComponent as DropDown } from 'shared/assets/icons/dropDown.svg';
import { ReactComponent as DropUp } from 'shared/assets/icons/dropUp.svg';

interface CommentsItemProps {
  comment: Comment;
  isChild?: boolean;
}

export const CommentsItem = ({ comment, isChild }: CommentsItemProps) => {
  const isHaveComments = comment.comments.length !== 0;
  const [isCommentsOpen, setIsCommentsOpen] = useState(isChild);

  const ReqursiveComments = () => {
    return (
      <AllComments>
        {comment.comments.map((item) => (
          <li key={item.id}>
            <CommentsItem comment={item} isChild />
          </li>
        ))}
      </AllComments>
    );
  };

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
        {isCommentsOpen && isHaveComments && <ReqursiveComments />}
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
`;

const CommentContainer = styled(PixelBalloon)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 16px;
`;

const UserName = styled.span`
  font-family: PressStart2P;
  font-size: 18px;
`;

const CommentContent = styled.span`
  overflow-wrap: break-word;
  font-family: monospace;
  font-size: 28px;
`;

const AllComments = styled.ul`
  list-style: none;
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
`;
