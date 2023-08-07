import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Calculator from "./pages/Calculator";

import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/calculator" element={<Calculator />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
