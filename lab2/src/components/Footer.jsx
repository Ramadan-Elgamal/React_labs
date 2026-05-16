import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-border mt-8 py-6">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Product Showcase. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
