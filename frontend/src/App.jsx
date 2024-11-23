import { Provider } from "react-redux";
import store from "./StoreComponent/Store";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Signup from "./Components/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
