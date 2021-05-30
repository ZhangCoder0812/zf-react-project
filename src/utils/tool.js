import react, { useState } from "react";

export function loadable(obj) {
  let { loader, loading: Loading } = obj;
  let Comp;
  Loading = Loading || (() => <h1>加载中...</h1>);
  return function (props) {
    let [flag, setFlag] = useState(false);
    loader().then((data) => {
      Comp = data.default;
      setFlag(true);
    });
    return <>{flag ? <Comp {...props} /> : <Loading />}</>;
  };
}
