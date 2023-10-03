import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";
import { addContactPath, updateContactPath, viewContactPath } from "./constant";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={addContactPath} component={AddEdit} />
          <Route path={updateContactPath} component={AddEdit} />
          <Route path={viewContactPath} component={View} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
