import React, {useState, useEffect}from "react";
import "./App.css"
import {Route,Link,Switch} from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form"
import schema from "./schemaFormat";
import * as yup from "yup";

const formInitialValue = {
  name:"",
  size:"",
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special:""
}

const formErrorValues = {
  name:"",
  size:""
}

const App = () => {

  const [formValues, setFormValues] = useState(formInitialValue);
  const [formErrors, setFormErrors] = useState(formErrorValues);
  const [disabled, setDisabled] = useState(true);

  const updateFormValues = (name,value)=>{
    const dontCares = ["topping1","topping2","topping3","topping4","special"];
    if(!dontCares.includes(name)){
      yup
      .reach(schema, name)
      .validate(value) 
      .then(() => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    }


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
    console.log(newOrder);
    setFormValues(formInitialValue);
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

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
          <Form value={formValues} update={updateFormValues} submit={submitForm} errors={formErrors} disabled={disabled}/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
