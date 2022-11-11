import "./index.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesProvider from "./context/CountriesContext";
import MainPage from "./pages/MainPage";
import CountriesPage from "./pages/CountriesPage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <CountriesProvider>
      <Router>
          <SideBar />
          <MainLayout>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/countries" element={<CountriesPage />} />
            </Routes>
          </MainLayout>
      </Router>
    </CountriesProvider>
  );
}

export default App;
