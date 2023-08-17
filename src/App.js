import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interface from "./Monitoring/Interface";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="*" element={'Ce faci aici'} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
