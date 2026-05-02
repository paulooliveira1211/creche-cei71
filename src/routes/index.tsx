import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Sobre from "../pages/Sobre"
import Servicos from "../pages/Servicos"
import Blog from "../pages/Blog"
import Contato from "../pages/Contato"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}