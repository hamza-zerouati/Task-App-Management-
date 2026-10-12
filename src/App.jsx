import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import { 
  Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  
} from "react-router-dom"



const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<LoginPage /> }/> 
      <Route path="/home-page" element={<HomePage/>}/>
       </>
    )
  )
  return (
  <RouterProvider router={route} />
  )
}

export default App