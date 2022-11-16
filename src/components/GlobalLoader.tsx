import { cx, css } from "@emotion/css";

import { Loader } from "./styled";


const GlobalLoader = () => {
  return (
    <Loader
      className={cx("absolute top-2 right-2 text-2xl opacity-100", css`
        transition: 0.3s ease;
      `)}
    />
  );
};

export default GlobalLoader;
