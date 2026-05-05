import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function PostsLayout() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "פוסט ראשון",
      body: "זהו התוכן של הפוסט הראשון בעברית.",
    },
    {
      id: 2,
      title: "פוסט שני",
      body: "זהו התוכן של הפוסט השני בעברית.",
    },
    {
      id: 3,
      title: "פוסט שלישי",
      body: "זהו התוכן של הפוסט השלישי בעברית.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogPosts = () => {
    console.log(posts);
  };

  const addPost = (newPost) => {
    setPosts((prev) => [
      { id: Date.now(), title: newPost.title, body: newPost.body },
      ...prev,
    ]);
  };

  const editPost = (postId, updatedFields) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, ...updatedFields } : post
      )
    );
  };

  return (
    <div className="posts-page">
      <header className="posts-header">
        <button onClick={handleLogPosts}>Log Posts</button>
        <button onClick={() => navigate("/posts/new")}>Add Post</button>
      </header>
      <section className="posts-content">
        <Outlet
          context={{ posts, loading, error, addPost, editPost }}
        />
      </section>
    </div>
  );
}

export default PostsLayout;
