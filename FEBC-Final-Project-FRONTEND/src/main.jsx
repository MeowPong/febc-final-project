import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { ThemeProvider, useTheme } from './contexts/ThemeContext.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import CourseDetail from './pages/CourseDetail.jsx';
import VideoPlayer from './pages/VideoPlayer.jsx';
import Payment from './pages/Payment.jsx';
import ContactUs from './pages/ContactUs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  { 
    path: "*", 
    element: <NotFound /> 
  },
  { 
    path: "/SignIn", 
    element: <SignIn /> 
  },
  { 
    path: "/SignUp", 
    element: <SignUp /> 
  },
  { 
    path: "/CourseDetail/:id", 
    element: <CourseDetail /> 
  },
  { 
    path: "/VideoPlayer", 
    element: <VideoPlayer /> 
  },
  { 
    path: "/Payment", 
    element: <Payment /> 
  },
  { 
    path: "/ContactUs", 
    element: <ContactUs /> 
  },
]);

// Component หลักที่จัดการ theme
const App = () => {
  const { theme } = useTheme();
  return (
    <div data-bs-theme={theme}>
      <RouterProvider router={router} />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  
)
