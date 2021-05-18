import React from 'react';
import {useState} from 'react';
import axios from 'axios';


export default props => {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', {
            productName,
            price,
            description
        })
            .then(res=>console.log("Response: ", res))
            .catch(err=>console.log("Error: ", err))
    }
    
    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label htmlFor="">Product</label>
                <input type="text" onChange={e=>setProductName(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Price</label>
                <input type="text" onChange={e=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Description</label>
                <input type="text" onChange={e=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}