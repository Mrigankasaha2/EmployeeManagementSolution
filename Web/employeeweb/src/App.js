import Loginpage from "./components/Loginpage";
import CreatenewLogin from "./components/CreatenewLogin";
import Employeelist from "./components/Employeelist";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex justify-center items-center">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/newlogin" element={<CreatenewLogin />} />
            <Route path="/employees" element={<Employeelist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
