import styled from 'styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global.styles';
import { darkTheme } from './theme';

interface AppContainerProps {
  children: any;
}

const Container = styled.div`
  max-width: 45rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_main};
  color: ${({ theme }) => theme.colors.primary_text};
  direction: rtl;
  overflow: hidden;
  padding: 2.4rem;

  body {
    background-color: ${({ theme }) => theme.colors.background_main};
  }
`;

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default AppContainer;
