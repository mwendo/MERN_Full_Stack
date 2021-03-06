import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';


const Details = (props) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props._id)
            .then(res => setProduct(res.data.product))
    }, [props._id])

    const OnClickHandler = (productId) => {
        console.log(productId);
        axios.delete("http://localhost:8000/api/product/delete/" + productId)
            .then(res => console.log("***", res));
        navigate('/product');
    }

    return (
        <div>
            <p>Product: {product.product}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/product/${product._id}/edit`}>Edit</Link>
            <hr></hr>
            <button className="btn btn-danger" onClick={()=>OnClickHandler(product._id)}>Delete</button>
        </div>
    )
}

export default Details;