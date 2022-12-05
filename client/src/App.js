import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameRoom from "./components/GameRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="room" element={<GameRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
