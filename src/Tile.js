// Tile.js

import React from 'react';

function Tile({ image, alt, title, firstParagraph, secondParagraph}) {
    return (
        <>
            <section>

                <img src={image} alt={alt}/>
                <h2>{title}</h2>
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>

            </section>
        </>
    );
}
export default Tile;