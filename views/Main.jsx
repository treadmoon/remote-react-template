import React, { useContext, memo } from "react";

import { CurrentUserContext } from "./App";

const Main = memo(function Main() {
  const { I18N, kdAjax } = useContext(CurrentUserContext);

  console.log("main", { I18N, kdAjax });

  return <div>Main</div>;
});

export default Main;
