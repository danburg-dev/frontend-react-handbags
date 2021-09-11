import React from 'react';
import Product from './Product.js';
import MenuButton from './MenuButton.js';

import handbag_1 from './assets/bag_1.png';
import handbag_2 from './assets/bag_2.png';
import handbag_3 from './assets/bag_3.png';
import handbag_4 from './assets/bag_4.png';
import './App.css';

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <MenuButton name="to the collection" />
            <MenuButton name="shop all bags" />
            <MenuButton disable={true} name="pre-orders" />
        </nav>

        <main>
            <Product
                quote="Best seller"
                image={handbag_1}
                title="The handy bag"
                price="€400,-"
            />
            <Product
                quote="Bestseller"
                image={handbag_2}
                title="The stylish bag"
                price="€ 250,-"
            />
            <Product
                quote="New Colletion"
                image={handbag_3}
                title="The simple bag"
                price="€ 300,-"
            />
            <Product
                quote="New Collection"
                image={handbag_4}
                title="The trendy bag"
                price="€ 150,-"
            />
        </main>
      </>

    // Geeft het volgende aan als ik npm install gedaan heb:
    // found 519 vulnerabilities (513 moderate, 6 high)
    // run `npm audit fix` to fix them, or `npm audit` for details
    //
    // waarom kan ik de button "pre-orders" niet disablen?
    // waarom krijg ik geen images te zien? -> whoops check (src ipv csr!)
  );
}

export default App;



