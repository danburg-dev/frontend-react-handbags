import React from 'react';
import Product from './Product.js';
import MenuButton from './MenuButton.js';
import Tile from './Tile.js';

import handbag_1 from './assets/bag_1.png';
import handbag_2 from './assets/bag_2.png';
import handbag_3 from './assets/bag_3.png';
import handbag_4 from './assets/bag_4.png';

import brand from './assets/brand.png';
import story from './assets/our_story.png';

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
                price="€ 400,-"
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

          <footer>
          <Tile
            title="The Brand"
            firstParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis a mi ut aliquet. Praesent ut luctus nisi. Aenean aliquet."
            secondParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis a mi ut aliquet. Praesent ut luctus nisi. Aenean aliquet."
          />
          <Tile
              image={brand}
              alt="Brand"
          />
          <Tile
              image={story}
              alt="Our Story"
          />
          <Tile
              title="Our story"
              firstParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies lectus tempus molestie feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam."
          />

        </footer>

      </>

    // Geeft het volgende aan als ik npm install gedaan heb:
    // found 519 vulnerabilities (513 moderate, 6 high)
    // run `npm audit fix` to fix them, or `npm audit` for details -> fix helpt ook niet
    //
    // waarom kan ik de button "pre-orders" niet disablen?
    // waarom krijg ik geen images te zien? -> whoops check in de function (src ipv scr!)
    // De tiles kloppen volgens voorbeeld als ik de browser verklein, niet als default. Is dit de bedoeling?
  );
}

export default App;



