import HomePage from "./pages/Home.page";
import NotFoundPage from "./pages/404";
import { Route, Routes } from "react-router-dom";

function App() {
  document.addEventListener("DOMContentLoaded", (event) => {
    console.log(event.target)
    console.log("Dom Content Loaded!")
  });

  return ( // add cookies policy
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/organization" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
