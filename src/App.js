import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Index from "./pages";
import About from "./pages/about";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import DynamicArticle from "./pages/dynamicArticle";
import Service from "./pages/service";
import Team from "./pages/team";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/article/:id" component={DynamicArticle} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
