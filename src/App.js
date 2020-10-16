import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import * as yup from 'yup';
import { schema } from './Schema';
import Home from './Home';
import Form from './Form';

const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  extraCheese: false,
  garlic: false,
  peppers: false,
  specialInstructions: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  extraCheese: false,
  garlic: false,
  peppers: false,
  specialInstructions: ''
}

const App = () => {

  const [ pizza, setPizza ] = useState(initialFormValues);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch((err) => {
        setFormErrors({...formErrors, [name]: err.errors[0] })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const postNewPizza = (newPizza) => {
    Axios
      .post('http://reqres.in/api/users', newPizza)
      .then((res) => {
        setPizza(res.data)
        console.log({pizza})
      })
  }

  const submit = () => {
    const newPizza = {
      id: `${uuid()}`,
      name: formValues.name.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      extraCheese: formValues.extraCheese,
      garlic: formValues.garlic,
      peppers: formValues.peppers,
      specialIntructions: formValues.specialInstructions.trim()
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);


  return (
    <>
      <h1>Lambda Eats</h1>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <Switch>
        <Route path='/pizza'>
          <Form
          values={formValues}
          change={inputChange}
          submit={submit}
          errors={formErrors}
          disabled={disabled}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
