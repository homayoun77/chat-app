import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AuthContextProvider from "./context/AuthContextProvider";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/chats" element={<Chats/>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
