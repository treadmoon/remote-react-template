import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";

import { getReactComponent } from "../../../../utils/reactComponent";
(function (KDApi) {
  const setHtml = function (model, props, { I18N, kdAjax, loadFile }) {
    ReactDOM.createRoot(model.dom).render(
      <App data={{}} I18N={I18N} kdAjax={kdAjax} loadFile={loadFile} />,
    );
  };

  const ReactComponent = getReactComponent(setHtml);

  // 注册自定义组件
  KDApi.register("<%= widgetName %>", ReactComponent);
})(window.KDApi);
