import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContent } from './views';
import routes from './routes';
import '@fontsource/metropolis';
import "./app.css";

function App() {
  return (
    <Router basename="/your-subdirectory">
      <AppContent routes={routes} />
    </Router>
  );
}

export default App;
