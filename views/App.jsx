import React, { useState, useEffect, createContext, useRef } from "react";

import { Button } from "@kdcloudjs/kdesign";
import Main from "./Main";

import style from "./app.less";
import "./index.css";

export const CurrentUserContext = createContext(null);

function App({ data, I18N, kdAjax, loadFile }) {
  console.log("APP", { data, I18N, kdAjax, loadFile });

  const utilRef = useRef({
    I18N,
    kdAjax,
  });

  const [list, setList] = useState([]);

  useEffect(() => {
    kdAjax.res("getUserList").then(({ data }) => {
      setList(data);
    });
  }, []);

  return (
    <div className={style["container"]}>
      <h2>{data.title}</h2>
      <ul>
        {list.map(({ id, name }) => {
          return (
            <li key={id} className="listItem">
              {name}
              <Button
                onClick={() => {
                  kdAjax.req("getList", { id }).then(({ data }) => {
                    console.log(data);
                  });
                }}
              >
                详情
              </Button>
            </li>
          );
        })}
      </ul>
      <CurrentUserContext.Provider value={utilRef.current}>
        <Main />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
