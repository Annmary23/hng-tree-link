import { Route, Routes } from 'react-router-dom'
import Tree from './Tree'
import "./Home.css"

const Home = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Tree />}/>
        </Routes>
    </>
  )
}

export default Home