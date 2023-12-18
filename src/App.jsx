import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefoultLayout from "./pages/DefoultLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePhoto from "./pages/SinglePhoto";
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './middlewares/PrivateRoute';
import Dashboard from "./pages/Dashboard";


function App() {

  return(
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route element={<DefoultLayout />}>

            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='/photo/:id' element={<SinglePhoto />}></Route>

            <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>


          </Route>
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
