import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={'dada'} />
        <Route path="*" element={'Ce faci aici'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
