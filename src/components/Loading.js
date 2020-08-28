import React from "react";
import load from "./loading.gif";

const Loading = () => {
  let style = {
    display: "block",
    margin: "auto",
    width: "200x",
  };
  return (
    <div>
      <img src={load} alt='loading' style={style} />
    </div>
  );
};
export default Loading;
