import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { Home } from "./pages/Home"
import { Experience } from "./pages/Experience"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expericence" element={<Experience />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
