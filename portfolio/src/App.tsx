import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import About from "./pages/about"
import Contact from "./pages/contact"
import ProjectDetail from "./pages/project-detail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
