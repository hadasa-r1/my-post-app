import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './components/post'

function App() {
  //const [count, setCount] = useState(0)

  const [posts, setPosts] = useState([
    {name: "dassi", content: "my post content"},
    {name: "dassi2", content: "my post content2"},
    {name: "dassi3", content: "my post content3"}
  ]);

  const handleEditPost = (newContent, index) => {
    setPosts(prevPosts => {
      const updatedPosts = [...prevPosts];
      updatedPosts[index].content = newContent;
      return updatedPosts;
    });
  }
  
  const handleLogPosts = () => {
    console.log(posts);
  }

  return (
    <>
    <div>
      {posts.map((post, index) => (<Post key={index} name={post.name} content={post.content} onEdit={(newContent) => handleEditPost(newContent, index)} />))}
    </div>
    <button onClick={handleLogPosts}>log the posts</button>
    </>
  )
}

export default App
