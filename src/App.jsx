import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./PageNotFound";
import PostsLayout from "./components/PostsLayout";
import PostsList from "./components/PostsList";
import AddPost from "./components/addPost";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsLayout />}>
          <Route index element={<PostsList />} />
          <Route path="new" element={<AddPost />} />
          <Route path=":postId" element={<PostDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
