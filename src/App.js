import "./styles/main.css";

//для перехода по страницам нужен роутер
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utilits/scrollToTop.js";
import Navbar from "./components/navbar/navbar.js";
import Footer from "./components/footer/footer.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Contacts from "./pages/Contacts.js";
import Project from "./pages/Project.js";

function App() {
  return (
    <div className="App">
      {/* снаружи обхватываем роутером для работы с маршрутизацией */}
      <Router>
        <ScrollToTop />
        <Navbar />
        {/*  Routes - Это компонент, предназначенный для определения 
        набора маршрутов в вашем приложении.
        Внутри <Routes> вы можете определить несколько <Route>
        компонентов для различных путей и компонентов, 
        которые должны быть отрендерены при совпадении маршрута. */}
        <Routes>
          {/* Route -  Этот компонент используется для определения 
          отдельного маршрута внутри <Routes>. 
          Он принимает свойство path, которое определяет шаблон пути, и element,
          которое указывает на компонент,
          который должен быть отрендерен при совпадении маршрута. */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          {/* Параметры могут быть использованы для организации различных
          видов контента в рамках одного маршрута. */}
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
