import React, { useContext, useEffect, useState } from "react";

import { IMenuItem, IMenuItems } from "../../model/MenuItem";

import MiniMenuItem from "../../components/MenuItem/MiniMenuItem";
import Filter from "../../components/Dropdown/Filter";
import { DataStoreContext } from "../../components/DataStoreContext";

function MenuPage({ menuItems }: IMenuItems) {
  const { filteredMenu, setMenu, setFilter } = useContext(DataStoreContext);

  useEffect(() => {
    setMenu(menuItems);
    setFilter(menuItems);
  }, []);

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

      <div className="filters">
        <Filter type="filter" />
        <Filter type="sort" />
      </div>
      <div className="menu">
        {filteredMenu &&
          filteredMenu.map((menuItem: IMenuItem) => (
            <MiniMenuItem
              key={menuItem.id}
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
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/menu");
  const menuItems = (await res.json()) as IMenuItem[];
  return {
    props: {
      menuItems,
    },
  };
}

export default MenuPage;
