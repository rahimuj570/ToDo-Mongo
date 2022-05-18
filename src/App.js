import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/ManageUser/Login";
import RequireAuth from "./Components/ManageUser/RequireAuth";
import ResetPass from "./Components/ManageUser/ResetPass";
import Signup from "./Components/ManageUser/Signup";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Todo />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/resetPass" element={<ResetPass />}></Route>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
