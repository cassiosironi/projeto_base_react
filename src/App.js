import "./App.css";
import Home from "./views/Home";
import Header from "./views/Header";
import Footer from "./views/Footer";
import Projetos from "./views/Projetos";
import Sobre from "./views/Sobre";
import Contato from "./views/Contato";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // rotas
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
