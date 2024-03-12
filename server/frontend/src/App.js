import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register";
import Register from './components/Register/Register.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/register" component={Register} />
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
