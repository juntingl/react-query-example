import styled from "@emotion/styled";
import { css, cx, keyframes } from "@emotion/css";
import { ImSpinner9 } from "react-icons/im";
import { IconBaseProps } from "react-icons/lib";
import { Link } from "react-router-dom";

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

export const PostStyles = styled(Link)`
  display: inline-block;
  border: solid 1px rgba(130, 130, 130, 0.3);
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
export const Loader = (props: IconBaseProps & { css?: string }) => {
  return (
    <ImSpinner9
      {...props}
      className={
        cx(
          props?.className,
          css`
            vertical-align: middle;
            animation: ${rotate} 1s linear infinite;
          `
        )
      }
    />
  );
}
