import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header, List, Nav, SavedList } from './components';
import { Global } from './styles';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <Header />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Route path="/" exact component={List} />
        <Route path="/saved" exact component={SavedList} />
      </BrowserRouter>
    </>
  );
}

export default App;
