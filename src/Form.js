import React from 'react';



export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = (evt) => {
          evt.preventDefault();
          submit()
      }

      const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }

      return(
          <form onSubmit={onSubmit}>
              <div>
                  {errors.name}
              </div>
              <div>
                  <h3>Build Your Pizza!</h3>
                  <label> Name:
                    <input
                    value={values.name}
                    type='text'
                    name='name'
                    onChange={onChange}
                    >
                    </input>
                  </label>
                  <label> Choose your size:
                    <select
                    name='size'
                    value={values.size}
                    onChange={onChange}
                    >
                        <option>Small: 12"</option>
                        <option>Medium: 16"</option>
                        <option>Large: 20"</option>
                    </select>
                  </label>
                  <div>Choose your sauce:
                        <label>Original Red
                            <input
                            type='radio'
                            name='sauce'
                            value='red'
                            checked={values.sauce === 'red'}
                            onChange={onChange}
                            >
                            </input>
                        </label>
                        <label>Garlic Ranch
                            <input
                            type='radio'
                            name='sauce'
                            value='ranch'
                            checked={values.sauce === 'ranch'}
                            onChange={onChange}
                            >
                            </input>
                        </label>
                        <label>BBQ Sauce
                            <input
                            type='radio'
                            name='sauce'
                            value='bbq'
                            checked={values.sauce === 'bbq'}
                            onChange={onChange}
                            >
                            </input>
                        </label>
                        <label>Spinach Alfredo
                            <input
                            type='radio'
                            name='sauce'
                            value='alfredo'
                            checked={values.sauce === 'alfredo'}
                            onChange={onChange}
                            >
                            </input>
                        </label>
                   </div>
                   <div> Add up to 4 toppings!
                       <label> Pepperoni
                            <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                            >
                            </input>
                       </label>
                       <label> Extra Cheese
                            <input
                            type='checkbox'
                            name='extraCheese'
                            checked={values.extraCheese}
                            onChange={onChange}
                            >
                            </input>
                       </label>
                       <label> Garlic
                            <input
                            type='checkbox'
                            name='garlic'
                            checked={values.garlic}
                            onChange={onChange}
                            >
                            </input>
                       </label>
                       <label> Peppers
                            <input
                            type='checkbox'
                            name='peppers'
                            checked={values.peppers}
                            onChange={onChange}
                            >
                            </input>
                       </label>
                   </div>
                   <div>
                       <label> Special Instructions:
                            <input
                            type='text'
                            name='specialInstructions'
                            value={values.specialInstructions}
                            onChange={onChange}
                            >
                            </input>
                       </label>
                   </div>
                   <button
                   disabled={disabled}
                   >
                       Add to Order
                    </button>
              </div>
          </form>
      )
}