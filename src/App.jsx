
import Contact from "./components/Contact/Contact"
import Education from "./components/Education/Education"
import Project from "./components/Project/Project"
import Services from "./components/Services/Services"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./pages/Home/Home"


function App() {


  return (
    <>
      <Sidebar></Sidebar>
      <Home></Home>
      <Services></Services>
      <Education></Education>
      <Project></Project>
      <Contact></Contact>
    </>
  )
}

export default App
