import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from '../../react-project-pastes3/src/components/Navbar'
import Home from '../../react-project-pastes3/src/components/Home'
import ViewPaste from '../../react-project-pastes3/src/components/ViewPaste'
import Paste from '../../react-project-pastes3/src/components/Paste'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>

    },
{
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
        </div>

    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
        
        </div>

    },
  ]
)
function App() {

  return (
    <div>
      <RouterProvider router={router}/>

      
    </div>
  )
}

export default App
