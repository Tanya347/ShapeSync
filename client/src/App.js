import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateEntry from "./pages/Entry/CreateEntry";
import Entries from "./pages/Entry/Entries";
import CreateRoutine from "./pages/Routine/CreateRoutine";
import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Login title="Login to Create"/>;
    } else {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <ProtectedRoute>
          <Route path="/newEntry" element={<CreateEntry />} />
        </ProtectedRoute>
        <ProtectedRoute>
          <Route path="/entries" element={<Entries />} />
        </ProtectedRoute>
        <ProtectedRoute>
          <Route path="/newRoutine" element={<CreateRoutine />} />
        </ProtectedRoute>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
