import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Wrapper } from "./components/styled";
import SideBar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Posts from "./pages/blog";
import Post from "./pages/blog/Post";
import Admin from "./pages/admin";
import AdminPost from "./pages/admin/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <SideBar />

        <Main className="bg-grid-slate-100">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Posts />} />
            <Route path="/blog/:postId" element={<Post />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/:postId" element={<AdminPost />} />
          </Routes>
        </Main>
      </Wrapper>
  </BrowserRouter>
  );
};

export default App;
