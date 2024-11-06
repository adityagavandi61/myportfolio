import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default App;
