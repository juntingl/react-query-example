import { css } from "@emotion/css";

import { Loader } from "./styled";

const GlobalLoader = () => {
  return (
    <Loader
      className={css`
        position: absolute;
        top: 8px;
        right: 8px;
        transition: 0.3s ease;
      `}
    />
  );
};

export default GlobalLoader;
