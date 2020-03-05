import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider as ReduxProvider } from "react-redux"

import Routes from "../Routes";
import store from "../../store";

const App = () => (
  <ReduxProvider store={store}>
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  </ReduxProvider>
);

export default App;


// Devemos usar o fragment pois o provider querer um nó único como filho