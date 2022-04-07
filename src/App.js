import {Routes, Route} from "react-router-dom"
import { AddProductPanel, AllProductPanel } from "./components/panels";
import {DashBoardPage, LoginPage, PageNotFound} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/dashboard" element={<DashBoardPage/>}>
          <Route index element={<AllProductPanel/>}/>
          <Route path="add" element={<AddProductPanel title="Add New Product"/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;

