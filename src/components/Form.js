import React from "react";
import "../css/form.css"

const Form =(prop)=>{
    const {value,update,submit} = prop;

    const onChange = (evt)=>{
        const {name,value, type, checked} = evt.target;
        const theValue = type==="checkbox" ? checked : value;
        update(name,theValue);
    }
    const submitForm = (evt)=>{
        evt.preventDefault();
        submit();
    }
    return (
        <div className="formDiv">
            <h1 className="heading">Build Your Own Pizza</h1>
            <div className="bg-img"></div>
            <form submit={submitForm} id="pizza-form">
                <div className="instruction">
                    <h2>Name</h2>
                </div>
                <label>
                    <input
                        id = "name-input"
                        type="text"
                        name="name"
                        value={value.name}
                        onChange={onChange}
                    />
                </label>
                <div className="instruction">
                    <h2>
                        Choice of Size
                    </h2>
                </div>
                <label>
                    <select id="size-dropdown" name="size" onChange={onChange}> 
                        <option value="">--Select The Pizza Size--</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                        <option value="Party Pizza">Party Pizza</option>
                    </select>
                </label>
                <div className="instruction">
                    <h2>
                        Add Toppings
                    </h2>
                </div>
                <div className="toppings">
                    <div className="toppingDiv">
                        <label>Pepperoni </label>
                        <label>Sausage </label>
                        <label>Canadian Bacon </label>
                        <label>Onions </label>
                    </div>
                    <div className="checkDiv">
                        <input type="checkbox" name="topping1" onChange={onChange}/>
                        <input type="checkbox" name="topping2" onChange={onChange}/>
                        <input type="checkbox" name="topping3" onChange={onChange}/>
                        <input type="checkbox" name="topping4" onChange={onChange}/>
                    </div>
                </div>
                <div className="instruction">
                    <h2>Special Instructions</h2>
                </div>
                <div>
                    <input
                        id="special-text"
                        type="text"
                        value={value.special}
                        onChange={onChange}
                    />
                </div>
            </form>
        </div>
    )
}


export default Form;