import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function PostDetails() {
  const { postId } = useParams();
  const { posts, loading, error, editPost } = useOutletContext();
  const navigate = useNavigate();
  const numericId = Number(postId);
  const post = posts.find((item) => item.id === numericId);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post?.title ?? "");
  const [body, setBody] = useState(post?.body ?? "");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  const handleSave = () => {
    editPost(numericId, { title: title.trim(), body: body.trim() });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(post.title);
    setBody(post.body);
    setIsEditing(false);
  };

  return (
    <div className="post-details">
      <h1>Post Details</h1>
      {isEditing ? (
        <div className="post-edit-form">
          <label>
            Title
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Body
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </label>
          <div className="post-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => navigate("/posts")}>Back to Posts</button>
    </div>
  );
}

export default PostDetails;
