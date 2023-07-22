import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Licencias from "./layouts/dashboard/licencias/Licencias";
import Infracciones from "./layouts/dashboard/infracciones/Infracciones";
import Ordenes from "./layouts/dashboard/ordenes/Ordenes";
import Inicio from "./layouts/inicio/Inicio";
import CardsStudio from "./layouts/cards/CardsStudio";
import PreLoader from "./components/PreLoader";
import Page404 from "./404/Page404";
import Acerca from "./layouts/acerca/Acerca";
import { useEffect } from "react";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <> 
      <HashRouter>
        <ScrollToTop />
        <Nav></Nav>
        <div className="w-full h-auto">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route
              path="/inicio"
              element={<Navigate to={"/"}></Navigate>}
            ></Route>
            <Route
              path="/incio/Cards"
              element={<CardsStudio></CardsStudio>}
            ></Route>
            <Route path="/licencias" element={<Licencias></Licencias>}></Route>
            <Route
              path="/infracciones"
              element={<Infracciones></Infracciones>}
            ></Route>
            <Route path="/ordenes" element={<Ordenes></Ordenes>}></Route>
            <Route path="/acerca" element={<Acerca></Acerca>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </HashRouter>
    </>
  );
}

export default App;
