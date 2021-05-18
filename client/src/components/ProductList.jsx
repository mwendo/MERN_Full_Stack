import React from 'react';


const PersonList = props => {
    return (
        <div>
            {props.product.map((product, index) => {
                return <p key={index}>{product.product}, {product.price}, {product.description}</p>
            })}
        </div>
    )
}
export default PersonList;