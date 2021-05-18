import React from 'react';


const PersonList = props => {
    return (
        <div>
            {props.product.map((product, index) => {
                return <p key={index}><a href={`/product/${product._id}`}>{product.product}</a></p>
                
            })}
        </div>
    )
}
export default PersonList;