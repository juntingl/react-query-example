import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Wrapper } from "./components/styled";
import SideBar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Posts from "./pages/blog";
import Post from "./pages/blog/Post";
import Admin from "./pages/admin";
import AdminPost from "./pages/admin/Post";
import GlobalLoader from "./components/GlobalLoader";
import { useIsFetching } from "@tanstack/react-query";

const App = () => {
  const isFetching = useIsFetching();

  return (
    <BrowserRouter>
      <Wrapper>
        <SideBar />

        <Main className="relative overflow-y-auto bg-slate-50 overflow-hidden scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded">
          { isFetching ? <GlobalLoader /> : null }
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/:postId" element={<AdminPost />} />
          </Routes>
        </Main>
      </Wrapper>
  </BrowserRouter>
  );
};

export default App;
