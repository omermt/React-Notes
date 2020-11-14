import React from 'react';

import { Provider } from "react-redux";
import { store } from 'redux/store';
import { AppRouter } from 'router';

//import { FirebaseContext } from './Firebase';

function App() {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
