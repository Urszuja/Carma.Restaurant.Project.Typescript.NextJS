import Link from 'next/link'
import React from 'react'

function AboutPage() {
  return (
    <div>
        <h4>About Page</h4>
        <p>We make pizza!</p>
        <div>
            <p>Go to:</p>
            <Link href='/menu'>Menu</Link>
        </div>
    </div>
  )
}

export default AboutPage