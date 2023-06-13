import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtikelList from "./components/ArtikelList";
import AddArtikel from "./components/AddArtikel";
import EditArtikel from "./components/EditArtikel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArtikelList/>}/>
        <Route path="add" element={<AddArtikel/>}/>
        <Route path="edit/:id" element={<EditArtikel/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
