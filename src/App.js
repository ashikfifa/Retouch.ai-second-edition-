import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Services, Contact,Test } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/services" exact component={() => <Services />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/test" exact component={() => <Test />} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;