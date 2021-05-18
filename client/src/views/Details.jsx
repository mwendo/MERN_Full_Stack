import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Details = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props._id)
            .then(res => setProduct(res.data.product))
            console.log(product);
    }, [props.id])
    return (
        <div>
            <p>Product: {product.product}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default Details;