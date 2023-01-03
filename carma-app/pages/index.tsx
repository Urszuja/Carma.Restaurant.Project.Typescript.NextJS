import Image from "next/image";

export default function Home() {
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
    </div>
  );
}
