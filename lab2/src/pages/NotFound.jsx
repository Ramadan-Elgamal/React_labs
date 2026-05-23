import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">404 — Page Not Found</h1>
        <p className="text-muted-foreground mb-6">We couldn't find the page you were looking for.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="rounded-md border border-border px-5 py-2">Home</Link>
          <Link to="/products" className="rounded-md bg-black px-5 py-2 text-white">Browse Products</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
