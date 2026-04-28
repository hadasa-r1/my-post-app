import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './components/post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Post name="dassi" content="my post content" />
    <Post name="dassi2" content="my post content2" />
    <Post name="dassi3" content="my post content3" />
    </>
  )
}

export default App
