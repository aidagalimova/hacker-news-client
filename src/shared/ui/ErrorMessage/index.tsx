import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ErrorProps {
  children?: ReactNode;
}
export const Error = ({ children }: ErrorProps) => {
  return (
    <ErrorContainer>
      <span>Something went wrong</span>
      {children}
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
