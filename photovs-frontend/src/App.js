import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import SignIn from './pages/SignIn/SignIn';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/log-in' element={<SignIn />} />
        </Routes>
      </Router>
    </UserProvider>
    </>
  );
}

export default App;
