import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.scss";

// @dev cont3xt api
import DataLayer from "./Contexts/Datalayer";

// @components
import { Auth0Provider } from "@auth0/auth0-react";
import "remixicon/fonts/remixicon.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <DataLayer>
      <App />
    </DataLayer>
  </Auth0Provider>,
  document.getElementById("root")
);
