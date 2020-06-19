import React from "react";

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
      } = props

      return(
        <form onSubmit={onSubmit}>
            <div className="errors">
                <div>{errors.size}</div>
                <div>{errors.instructions}</div>
                <div>{errors.name}</div>
            </div> 
            <div>
                <h1>Build Your Pizza</h1>
                <label>Size:
                    <select
                        onChange={onInputChange}
                        value={values.role}
                        name='size'
                    >
                        <option value=''>- Select a Size -</option>
                        <option value="Individual">Individual</option>
                        <option value="Small">Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='XL'>Extra Large</option>
                    </select>
                </label>
            </div>
            <div className="Toppings">
                    <label>Pepperoni
                        <input
                            name='pepperoni'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.pepperoni}
                        />
                    </label>
                    <label>Ham
                        <input
                            name='ham'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.ham}
                        />
                    </label>
                    <label>Mushroom
                        <input
                            name='mushroom'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.mushroom}
                        />
                    </label>
                    <label>Onion
                        <input
                            name='onion'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.onion}
                        />
                    </label>
                     <label>Sausage
                        <input
                            name='sausage'
                            type="checkbox"
                            onChange={onCheckboxChange}
                            checked={values.toppings.sausage}
                        />
                    </label>
            </div>
            <div>
            <label>Special Instructions:&nbsp;
                    <textarea
                        value={values.instructions}
                        name="instructions"
                        type="text"
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <div className="submit">
                <label>Enter Name:&nbsp;
                    <input 
                        value={values.name}
                        type="text"
                        name="name"
                        onChange={onInputChange}
                    />
                </label>
                <button disabled={disabled}>Add to Order</button>
            </div>
        </form>
      )
}
