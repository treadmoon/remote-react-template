import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import kdPreAjax from "./mock";

ReactDOM.createRoot(document.getElementById("App")).render(
  <App
    data={{
      title: "react远程模板",
    }}
    I18N={(text) => text}
    kdAjax={kdPreAjax}
  />
);
