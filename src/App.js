import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import Form from "./Form";
import formSchema from "./formSchema";
import * as Yup from "yup";

const initialFormValues = {
  size: "",
  instructions: "",
  name: "",
  toppings: {
    pepperoni: false,
    ham: false,
    mushroom: false,
    onion: false,
    sausage: false,
  }
}

const initialFormErrors = {
  size: "",
  instructions: "",
  name: "",
}

export default function App() {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(false)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

   

  const onInputChange = event => {
    const { name, value } = event.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = event => {
    const { name, checked } = event.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    const newOrder = {
      size: formValues.size.trim(),
      instructions: formValues.instructions.trim(),
      name: formValues.name.trim(),
      toppings: Object.keys(formValues.toppings).filter(topping => formValues.toppings[topping] === true)
    }
    setOrders([...orders, newOrder])
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div>
      <Switch>
        <Route path="/pizza">
          <Form 
             values={formValues}
             onSubmit={onSubmit}
             onInputChange={onInputChange}
             onCheckboxChange={onCheckboxChange}
             disabled={disabled}
             errors={formErrors}
          />
          {
          orders.map((order, i) => {
            return (
              <div key={i}>
                <h3>{order.name}</h3>
                <p>{order.size}</p>
                <p>{order.instructions}</p>
                <p>{order.toppings.join(", ")}</p>
              </div>
              )
            })
          }
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
