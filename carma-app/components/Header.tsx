import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

function Header() {
  return (
    <div>
    <Image src="/LogoWithName.svg" alt="Carma Logo" width={100} height={70} />
    <h1>Carma</h1>
    <div>
        <div> <Link href='/order/list'>Profile</Link></div>
        <div>

        <Link href='/menu'>Menu</Link>
        </div>
        <div>

        <Link href='/order'>Cart</Link>
        </div>
    </div>
    </div>
  )
}

export default Header;