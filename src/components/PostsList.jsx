import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function PostsList() {
  const { posts, loading, error } = useOutletContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="posts-list">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <Link key={post.id} to={`${post.id}`} className="post-link">
            <article className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          </Link>
        ))
      )}
    </div>
  );
}

export default PostsList;
