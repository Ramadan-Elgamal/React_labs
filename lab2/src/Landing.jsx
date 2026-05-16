import React from 'react'
import { Link } from 'react-router'

const Landing = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to the Product Showcase</h1>
        <p className="text-muted-foreground mb-6">Discover curated products, read details, and explore features. Built with a simple React + Vite setup.</p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/products" className="rounded-md bg-black text-white px-5 py-2 text-white">Browse Products</Link>
          <Link to="/" className="rounded-md border border-border px-5 py-2">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
