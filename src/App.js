import { BrowserRouter, Route } from "react-router-dom";
import NavbarTop from "./Navbar";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile";
import Order from "./components/Order";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <NavbarTop />
        <main className="py-sm-5 my-sm-3 ">
          <Route path="/" component={Profile} exact />
          <Route path="/order" component={Order} exact />
        </main>
        <footer className="bg-light margin-left purple text-center p-2">
          <div>All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
