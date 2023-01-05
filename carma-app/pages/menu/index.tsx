import React, { useContext, useState } from "react";

import { IMenuItem } from "../../model/MenuItem";

import MiniMenuItem from "../../components/MenuItem/MiniMenuItem";
import Filter from "../../components/Filter/Filter";

function MenuPage({ menuItems }: any) {
  const [menu, setMenu] = useState(menuItems);
  return (
    <div className="menu-page">
      <h4>Order now!</h4>
      <div className="restaurant-description">
        Bacon ipsum dolor amet biltong ham drumstick kielbasa, meatloaf shoulder
        beef ground round ball tip picanha. Sausage bacon ground round jerky ham
        hock bresaola andouille chuck buffalo shankle pork belly tail doner
        drumstick. Strip steak burgdoggen jowl capicola meatloaf beef ribs jerky
        corned beef fatback filet mignon. Drumstick alcatra pork tail pig.
      </div>
      <div className="menu-with-filters">
        <div className="filters">
          <Filter name="Filter" menu={menu} setMenu={setMenu} />
        </div>
        <div className="menu">
          {menu.map((menuItem: IMenuItem) => (
            <MiniMenuItem
              name={menuItem.name}
              id={menuItem.id}
              prices={menuItem.prices}
              image={menuItem.image}
              description={menuItem.description}
              isSpicy={menuItem.isSpicy}
              isVegan={menuItem.isVegan}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/menu");
  const menuItems = await res.json();
  return {
    props: {
      menuItems,
    },
  };
}

export default MenuPage;
