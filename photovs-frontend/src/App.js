import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import SignIn from './pages/SignIn/SignIn';
import { UserProvider } from './contexts/UserContext';
import Main from './pages/Main/Main';
import useToken from './hooks/useToken';


export default function App() {
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

          <Route
            path="/main"
            element={
              <ProtectedRouteGuard>
                <Main />
              </ProtectedRouteGuard>
            } 
          />

        </Routes>
      </Router>
    </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}