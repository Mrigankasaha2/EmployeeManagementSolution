import Loginpage from "./components/Loginpage";
import CreatenewLogin from "./components/CreatenewLogin";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-400">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/newlogin" element={<CreatenewLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
