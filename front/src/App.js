import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import { CoursesProvider } from "../src/context/CoursesContext";
//import CoursesContext from "./components/CoursesContext.js";
import CoursesContx from "./components/CourseContx.js";
import Start from "../src/pages/Start.js";
import Footer from "./components/Footer.js";
import Login from "../src/components/Login.js";
import CustomerArea from "./components/CustomerArea.js";

/**
 * @author Natalia
 * @email natalia@gmail.com
 * @version 1.0
 * @since 2025-03-12
 * @copyright creanunate
 * History
 * v1.0 -Se creo inicio con acceso a cursos segun el tipo.Cursos con el contenido de todos los cursos y login con acceso a cursos favoritos.
 * 
 */

/**
 * Componente principal de la aplicación.
 *
 * - Configura las rutas con `react-router-dom`.
 * - Envuelve las rutas dentro de `CoursesProvider` para proporcionar el contexto de cursos.
 * - Renderiza el `Header` y `Footer` en todas las páginas.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la aplicación.
 */

//import Courses from "./components/Courses";

function App() {
  return (
    <div>
      {/* Router envuelve toda la aplicación para manejar la navegación */}
      <Router>

        {/* Header visible en todas las páginas */}
        <Header />
        
        {/* Proveedor de contexto para compartir los datos de cursos en toda la app */}
        <CoursesProvider>

          <Routes>

            {/* Página de inicio */}
            <Route path="/" element={<Start />}></Route>

            {/* Página de cursos con contexto */}
            <Route path="/Course" element={<CoursesContx />}></Route>

            {/* Página de inicio de sesión */}
            <Route path="/Login" element={<Login />}></Route>

            {/* Área de clientes (requiere autenticación) */}
            <Route path="/CustomerArea" element={<CustomerArea />}></Route>

          </Routes>

        </CoursesProvider>
        {/* Footer visible en todas las páginas */}
        <Footer />

      </Router>
    </div>
  );
}

export default App;
