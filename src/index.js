import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './store';
import {
  RouterProvider,
} from "react-router-dom";
import './index.css';
import router from "./App"



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  </StrictMode>

);



