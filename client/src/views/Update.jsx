import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {
    const {_id} = props;
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => {
                console.log(res);
                setProduct(res.data.product.product);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
    }, [_id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${_id}`, {
            product,
            price,
            description
        })
            navigate('/product');
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Product</label>
                    <input type="text" name="product" value={product} onChange={(e) => {setProduct (e.target.value) }} />
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" name="price" value={price} onChange={(e) => {setPrice (e.target.value) }} />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name="description" value={description} onChange={(e) => {setDescription (e.target.value) }} />
                </p>
                <input type="submit" value="Update" className="btn btn-lg btn-warning" />
            </form>
        </div>
    )
}

export default Update;