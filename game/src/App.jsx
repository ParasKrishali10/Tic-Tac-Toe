
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import { Game } from "./pages/Game.jsx";
function App() {
  return (

  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/game" element={<Game/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App;
