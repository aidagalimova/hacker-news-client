import styled from 'styled-components';
import { ReactComponent as SadCat } from 'shared/assets/icons/sadCat.svg';
import { BackLink } from 'shared/ui/BackLink';
export const NotFound = () => {
  return (
    <>
      <BackLink />
      <NotFoundContainer>
        <SadCat />
        <StatusText>404</StatusText>
        <ErrorText>Page not found</ErrorText>
      </NotFoundContainer>
    </>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  svg {
    width: 200px;
    height: 200px;
  }
`;
const StatusText = styled.span`
  font-size: 40px;
`;
const ErrorText = styled.span`
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 16px;
  }
`;
