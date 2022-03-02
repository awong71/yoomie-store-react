import {Routes, Route} from "react-router-dom"
import {DashBoardPage, LoginPage, PageNotFound} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
        <Route path="/dashboard" element={<DashBoardPage/>}/>
      </Routes>
    </>
  );
}

export default App;

