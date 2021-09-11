// MenuButton.js

import React from 'react';

function MenuButton ({name}) {
    return (
            <button type="button" onClick={() => console.log([name] + " was clicked")}>{name}</button>
    );
}

export default MenuButton;