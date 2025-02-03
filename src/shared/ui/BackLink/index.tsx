import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const BackLink = () => {
  return (
    <Back>
      <Link to={'/'}>&#x2190; Back</Link>
    </Back>
  );
};
const Back = styled.div`
  a {
    user-select: none;
    text-decoration: none;
    color: ${(props) => props.theme.secondaryText};
    cursor: pointer;
    &:visited {
      color: unset;
    }
    &:hover {
      color: ${(props) => props.theme.secondaryHover};
    }
  }
`;
