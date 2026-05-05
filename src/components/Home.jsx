import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <nav>
        <Link to="/posts">Go to Posts</Link>
      </nav>
    </div>
  );
}

export default Home