import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBio from "./pages/dashboard/CreateBio";
import Templates from "./pages/dashboard/Templates";
import Preview from "./pages/dashboard/Preview";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/create" element={<CreateBio />} />
          <Route path="/dashboard/templates" element={<Templates />} />
          <Route path="/dashboard/preview" element={<Preview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;