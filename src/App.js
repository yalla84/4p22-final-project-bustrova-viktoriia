import "./App.css";
import Callback from './Pages/PageCallback/Callback';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import OneProduct from "./Pages/OneProduct/OneProduct";
import PageTest from "./Pages/PagesTest/PagesTest"

function App() {
  return (
    <div className="App">
    <Router basename='4p22-final-project-bustrova-viktoriia'>
      <Routes>
          <Route index path={'/'} element={<Home />} />
          <Route path={'Callback'} element={<Callback />} />
          <Route path={'PageTest'} element={<PageTest />} />
          <Route path={'PageTest/OneProduct'}>
            <Route path={':userId'} element={<OneProduct />} />
          </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
