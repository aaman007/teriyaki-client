import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Suspense fallback={
                  <p> Loading </p>
                }
              >
                <App />
              </Suspense>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
