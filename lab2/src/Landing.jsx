import React from 'react'
import { Link } from 'react-router'

const Icon = ({ children }) => (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">{children}</div>
)

const Feature = ({ title, desc, icon }) => (
    <div className="rounded-2xl bg-white/5 p-6 shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
            <div className="shrink-0">
                <Icon>{icon}</Icon>
            </div>
            <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
        </div>
    </div>
)

const Testimonial = ({ quote, author }) => (
    <blockquote className="rounded-xl bg-white/3 p-5">
        <p className="text-sm">“{quote}”</p>
        <footer className="mt-3 text-xs text-muted-foreground">— {author}</footer>
    </blockquote>
)

const Landing = () => {
    return (
        <main className="space-y-20">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-border bg-background py-20">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.08),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
                <div className="container mx-auto px-6 text-center">
                    <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-card/70 px-6 py-12 shadow-xl backdrop-blur md:px-10">
                        <span className="mb-4 inline-flex rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                            Curated products, clear details, better choices
                        </span>
                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                            Product Showcase
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                            Explore curated products with detailed pages, images, and clear specs. Fast, responsive, and easy to browse.
                        </p>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background shadow-md transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                            >
                                Browse Products
                            </Link>
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors hover:bg-muted"
                            >
                                Explore Features
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-8">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <Feature
                            title="Curated Products"
                            desc="Handpicked items to surface the most relevant choices quickly."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l6 6-6 6M21 7l-6 6 6 6" /></svg>}
                        />
                        <Feature
                            title="Fast Details"
                            desc="Detailed product pages with images and specs for confident decisions."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zM12 14v6" /></svg>}
                        />
                        <Feature
                            title="Responsive UI"
                            desc="Layouts that adapt to any device for a consistent experience."
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-black text-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-3">Ready to explore?</h3>
                    <p className="text-muted-foreground mb-6">Start browsing our product catalog and find something you love.</p>
                    <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-black font-medium shadow hover:bg-indigo-700">Browse Products</Link>
                </div>
            </section>
        </main>
    )
}

export default Landing
