import Link from 'next/link'
import React from 'react'

const Test = () => {
    return(
      <div>
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #785078;
      }

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin-right: 1rem;
      }

      a {
        color: #333;
        text-decoration: none;
      }
    `}</style>
  </nav>

  </div>
   )

    }

export default Test
