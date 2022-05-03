import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/NavFooter/Footer";
import Navbar from "./components/NavFooter/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/landing">
            <Landing />
          </Route>
          <Route exact path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
