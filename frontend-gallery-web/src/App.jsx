import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Blogs from "./components/post/Blog";
import NotFound from "./components/404";
import ShowBlog from "./components/post/ShowBlog";
import ShowImagePosts from "./components/post/ShowImagePosts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:slug" element={<ShowBlog />} />
          <Route path="/image-posts/:slug" element={<ShowImagePosts />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
