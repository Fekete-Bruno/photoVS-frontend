import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
