// Product.js

import React from 'react';

function Product({ quote,image, title, price}) {
    return (
        <article>
        <span>{quote}</span>
    <img src={image} alt={title} />
    <p>{title}</p>
    <h4>{price}</h4>
</article>
    );
}

export default Product;