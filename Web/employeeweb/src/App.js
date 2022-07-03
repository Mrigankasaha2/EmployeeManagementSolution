import Loginpage from "./components/Loginpage";
import CreatenewLogin from "./components/CreatenewLogin";
import Employeelist from "./components/Employeelist";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="flex justify-center items-center">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/newlogin" element={<CreatenewLogin />} />
          <Route path="/employees" element={<Employeelist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
