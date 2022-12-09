import React from 'react'
import Link from 'next/link'

function MenuPage() {
  return (
    <div>
        <h4>Menu Page</h4>
        <div>
            <p>Go to:</p>
            <ol>
                <li><Link href='/order'>Cart</Link></li>
                <li><Link href='/about'>About us</Link></li>
            </ol>
        </div>

    </div>
  )
}

export default MenuPage