import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './redux/store';


/*Provider - suggested by react to use HOC to connect to redux store
is a component that we will use as a parent of everything in the app and allows access to all the things in the store
Once it's passed the store obj, it gives redux store context to the rest of the app.*/
ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
