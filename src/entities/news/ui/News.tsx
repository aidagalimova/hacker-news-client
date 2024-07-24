import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FullNews } from '../model/types/newsType';
import { PixelContainer, Tooltip } from 'features/ui/styledComponents';

interface NewsProps {
  news: FullNews;
}

export const News = ({ news }: NewsProps) => {
  const { title, user, date, timeAgo, url } = news;
  return (
    <Container>
      <User>by {user}</User>
      <Date>
        <DateText>{date}</DateText>
        <Tooltip>
          <TimeAgoText>{timeAgo}</TimeAgoText>
        </Tooltip>
      </Date>
      <Title>{title}</Title>
      {url && (
        <Url>
          <Link to={url}>{url}</Link>
        </Url>
      )}
    </Container>
  );
};

const Container = styled(PixelContainer)`
  width: 100%;
  padding: 32px 28px 24px 28px;
`;

const Title = styled.span`
  font-size: 24px;
`;

const User = styled.div`
  position: absolute;
  top: -14px;
  left: 24px;
  padding: 0 4px;
  font-size: 18px;
  background-color: ${(props) => props.theme.primaryBg};
`;

const Url = styled.div`
  margin-top: 8px;
  a {
    font-family: monospace;
    font-size: 20px;
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
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.primaryBg};
  &:hover {
    ${Tooltip} {
      visibility: visible;
    }
  }
`;

const DateText = styled.span`
  font-size: 14px;
  user-select: none;
  color: ${(props) => props.theme.secondaryText};
`;
