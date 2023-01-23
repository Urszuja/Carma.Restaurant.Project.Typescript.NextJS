import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import { IMenuItem, IMenuItems } from "../model/MenuItem";

export default function Home({ menuItems }: IMenuItems) {
  const [displayNumber, setDisplayNumber] = useState<number>(1);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setDisplayNumber(5);
    } else if (window.innerWidth > 700) {
      setDisplayNumber(3);
    } else {
      setDisplayNumber(1);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => handleResize(), []);

  return (
    <div className="home-page">
      <Image src="/LogoWithName.svg" alt="Carma Logo" width={120} height={60} />
      <h2>In Carma we trust</h2>
      <div className="restaurant-description">
        Bacon ipsum dolor amet biltong ham drumstick kielbasa, meatloaf shoulder
        beef ground round ball tip picanha. Sausage bacon ground round jerky ham
        hock bresaola andouille chuck buffalo shankle pork belly tail doner
        drumstick. Strip steak burgdoggen jowl capicola meatloaf beef ribs jerky
        corned beef fatback filet mignon. Drumstick alcatra pork tail pig.
      </div>
      <h3>
        Check our
        <Link href="/menu"> menu</Link>
      </h3>
      <Carousel menuItems={menuItems} displayNumber={displayNumber} />
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
