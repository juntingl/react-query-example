import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/css";
import { ImSpinner9 } from "react-icons/im";
import { IconBaseProps } from "react-icons/lib";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const SidebarStyles = styled.div`
  width: 200px;
  border-right: 1px solid black;
  background-color: rgb(24 24 27/1);
  color: #FFF;
  box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
`;

export const Main = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const PostStyles = styled.div`
  display: inline-block;
  border: inline-block;
  padding: 1rem;
  color: inherit;

  :hover {
    text-decoration: none;
    h3 {
      text-decoration: underline;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Loader = (props: IconBaseProps) => {
  return (
    <ImSpinner9
      {...props}
      className={css`
        vertical-align: middle;
        animation: ${rotate} 1s linear infinite;
      `}
    />
  );
}
