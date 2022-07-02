import Loginpage from "./components/Loginpage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-slate-400">
      <ToastContainer />
      <Loginpage />
    </div>
  );
}

export default App;
