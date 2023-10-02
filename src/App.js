import "./App.css";
// import Contact from './pages/Contact/Contact';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages/Index/Index";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
