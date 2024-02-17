import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreateEntry from "./pages/Entry/CreateEntry";
import Entries from "./pages/Entry/Entries";
import CreateRoutine from "./pages/Routine/CreateRoutine";
import { useContext} from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const { user } = useContext(AuthContext);

  const ProtectedRoute = ({ children }, link) => {
    if (!user) {
      return <Login title="Login to Create" link={link}/>;
    } else {
      return children;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} link="/"/>
        <Route path="/register" element={<Register/>} />
        
          <Route path="/newEntry" element={<ProtectedRoute link="newEntry"><CreateEntry /></ProtectedRoute>} />
          <Route path="/entries" element={<ProtectedRoute link="entries"><Entries /></ProtectedRoute>} />
          <Route path="/newRoutine" element={<ProtectedRoute link="newRoutine"><CreateRoutine /></ProtectedRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
