import Image from "next/image";
import Carousel from "../components/Carousel/Carousel";
import { IMenuItem, IMenuItems } from "../model/MenuItem";

export default function Home({ menuItems }: IMenuItems) {
  return (
    <div className="home-page">
      <Image src="/LogoWithName.svg" alt="Carma Logo" width={120} height={60} />
      <h4>In Carma we trust</h4>
      <div className="restaurant-description">
        Bacon ipsum dolor amet biltong ham drumstick kielbasa, meatloaf shoulder
        beef ground round ball tip picanha. Sausage bacon ground round jerky ham
        hock bresaola andouille chuck buffalo shankle pork belly tail doner
        drumstick. Strip steak burgdoggen jowl capicola meatloaf beef ribs jerky
        corned beef fatback filet mignon. Drumstick alcatra pork tail pig.
      </div>
      <Carousel menuItems={menuItems} />
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
