import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { News } from '../model/types/newsType';
import { ReactComponent as Star } from 'shared/assets/icons/star.svg';
import { PixelContainer, Tooltip } from 'shared/styledComponents';

interface NewsItemProps {
  news: News;
}

export const NewsItem = ({ news }: NewsItemProps) => {
  const { title, user, points, date, timeAgo } = news;
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(`${news.id}`)}>
      <Name>
        <NameText>by {user}</NameText>
      </Name>
      <Body>
        <Title>{title}</Title>
        <Score>
          <ScoreText>{points}</ScoreText>
          <Star />
        </Score>
        <Date>
          <DateText>{date}</DateText>
          <Tooltip>
            <TimeAgoText>{timeAgo}</TimeAgoText>
          </Tooltip>
        </Date>
      </Body>
    </Container>
  );
};

const Container = styled(PixelContainer)`
  position: relative;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.primaryBg};
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    padding: 14px 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 12px 16px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 32px;
  font-family: monospace;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }
`;

const Name = styled.span`
  position: absolute;
  top: -14px;
  left: 24px;
  padding: 0px 4px;
  background-color: ${(props) => props.theme.primaryBg};
`;

const NameText = styled.span`
  font-size: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }
`;

const TimeAgoText = styled.span`
  user-select: none;
  font-size: 12px;
  color: ${(props) => props.theme.secondaryText};
`;

const Date = styled.div`
  position: absolute;
  bottom: -12px;
  right: 32px;
  padding: 0px 4px;
  background-color: ${(props) => props.theme.primaryBg};
  &:hover {
    ${Tooltip} {
      visibility: visible;
    }
  }
`;

const DateText = styled.span`
  user-select: none;
  color: ${(props) => props.theme.secondaryText};
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 10px;
  }
`;

const Score = styled.div`
  position: absolute;
  bottom: -12px;
  left: 24px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 2px;
  padding: 0px 4px;
  background-color: ${(props) => props.theme.primaryBg};
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ScoreText = styled.span`
  user-select: none;
`;
