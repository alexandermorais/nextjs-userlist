import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div className="container">

      <h1>404</h1>
      <p>Page not found</p>

      <br></br>
      <Link href="/" className="button">
        Back to home
      </Link>

    </div>
  )
}

export default Error