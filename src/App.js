import "./App.css";
import CartPage from "./pages/CartPage";
// Uncomment and use the Home component or define it if not yet created
import Home from "./pages/Home"; 
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Ensure Home component is imported and defined                                
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path:"/cart",
    element:<CartPage/>,
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
