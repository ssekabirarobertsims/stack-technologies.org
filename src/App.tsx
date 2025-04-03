import HomePage from "./pages/Home.page";
import { Route, Routes } from "react-router-dom";

function App() {
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log(event.target)
    console.log("Dom Content Loaded!")
  });

  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/organization" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
