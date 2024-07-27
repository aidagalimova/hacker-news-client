import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'app/store';
import { uiActions } from 'features/ui/uiSlice';
import { PixelContainer } from 'features/ui/styledComponents';

interface PopUpProps {
  content: string;
}

export const PopUp = ({ content }: PopUpProps) => {
  const { isDisplay } = useSelector((state: RootState) => state.ui.popUp);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(uiActions.hideModal());
    };
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      dispatch(uiActions.hideModal());
    }, 1000);
    return () => clearTimeout(timerId);
  }, [isDisplay]);

  return (
    <Container className={isDisplay ? 'active' : ''}>
      <Content>{content}</Content>
    </Container>
  );
};

const Container = styled(PixelContainer)`
  position: fixed;
  top: -58px;
  left: 0;
  right: 0;
  z-index: 5;
  width: fit-content;
  padding: 8px 12px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.primaryBg};
  &.active {
    animation: display 0.5s forwards;
    animation-iteration-count: 1;
  }
  @keyframes display {
    from {
      top: -58px;
    }
    to {
      top: 32px;
    }
  }
`;

const Content = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.primaryText};
  @media (max-width: ${({ theme }) => theme.breakpoints.iPad}px) {
    font-size: 16px;
  }
`;
