import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../ProductForm.css';



const ProductForm = (props) => {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {
            product,
            price,
            description
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error: ", err))
    }
    
    return(
        <div className="yellow">
        <h1>Product Manager</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="">Product</label>
                    <input type="text" class="formStyle" onChange={e=>setProduct(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="">Price</label>
                    <input type="text" class="formStyle" onChange={e=>setPrice(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text" class="formStyle" onChange={e=>setDescription(e.target.value)}/>
                </div>
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default ProductForm;