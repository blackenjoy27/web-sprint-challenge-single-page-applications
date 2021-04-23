import React, {useState}from "react";
import "./App.css"
import {Route,Link,Switch} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form"

const formInitialValue = {
  name:"",
  size:"",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special:""
}


const App = () => {

  const [formValues, setFormValues] = useState(formInitialValue);

  const updateFormValues = (name,value)=>{
    setFormValues({...formValues, [name]:value});
  }

  const submitForm = ()=>{
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      topping1: formValues.topping1,
      topping2: formValues.topping2,
      topping3: formValues.topping3,
      topping4: formValues.topping4,
      special: formValues.special
    }
  }
  return (
    <>
      <nav className="nav-bar">
        <h1 className="company">Lambda Eats</h1>
        <Link to="/" className="home">
          <button>Home</button>
        </Link>
        <button className="help">Help</button>
      </nav>
      <Switch>
        <Route path="/pizza">
          <Form value={formValues} update={updateFormValues} submit={submitForm}/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
