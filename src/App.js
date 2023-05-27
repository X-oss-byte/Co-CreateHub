import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";
import Profile from "./pages/profile.jsx";
import Room from "./pages/Room.jsx";
import Canvas from "./pages/Canvas.jsx";
import FirstScreen from "./pages/FirstScreen.jsx";
import Home from "./pages/Home.jsx";
import CreateProject from "./pages/CreateProject.jsx";
function App() {
  return (
    <div className="App w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createRoom" element={<CreateProject />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/canvas/:roomId" element={<Canvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
