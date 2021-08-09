import React from "react";
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";

//Router
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Screen1} />

      <Route path="/comments" exact component={Screen2} />
    </Router>
  );
}

export default App;
