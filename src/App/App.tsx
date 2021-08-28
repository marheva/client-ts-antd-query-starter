import React, { Fragment, ReactElement } from "react";
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import queryClient from "../react-query";
import '../i18n'
import { GlobalStyles } from '../styles';
import Root from "../components/Root";
import Wrapper from "../components/common/Wrapper";

function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Fragment>
        <GlobalStyles />
        <Wrapper className="App">
          <Root />
        </Wrapper>
      </Fragment>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App;
