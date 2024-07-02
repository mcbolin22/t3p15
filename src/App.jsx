import { Route, Routes } from "react-router-dom";
import Template from "./pages/_Template";
import HomePage from "./pages/HomePage";
import GeneratorPage from "./pages/GeneratorPage";


function App() {
  return (
    <Routes>
      {/* localhost:3000/ */}
      <Route path="/" element={<Template />}>
        {/* Route index uses parent path above and  displays both elements simultaneously */}
        <Route index element={<HomePage />}/>
        <Route path="generator" element={<GeneratorPage />}/>
        {/* <Route path="generator/saved" element={<SavedThemesPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
