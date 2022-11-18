import { Link } from "react-router-dom";

import { SidebarStyles } from "./styled";

const liClassName = "h-10 leading-10 pr-4";

const SideBar = () => {
  return (
    <SidebarStyles>
      <div className="flex justify-center p-2 m-4 mb-4 text-lg font-bold text-orange-500 rounded-sm bg-slate-100 logo">
        React Query
      </div>

      <ul className="flex flex-col text-right">
        <li className={liClassName}><Link to="/">Home</Link></li>
        <li className={liClassName}><Link to="/posts">Posts</Link></li>
        <li className={liClassName}><Link to="/admin">Admin</Link></li>

        <hr />
        <li className={liClassName}><Link to="/react-query/posts">RQPosts</Link></li>
        <li className={liClassName}><Link to="/react-query/admin">RQAdmin</Link></li>
      </ul>
    </SidebarStyles>
  );
};

export default SideBar;
