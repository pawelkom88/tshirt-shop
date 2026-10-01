"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { cartCount } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    setSearchOpen(false)
  }

  return (
    <>
      {/* Top Marquee Bar */}
      <div className="marquee-bar">
        <div className="marquee-container">
          <div className="marquee-content">
            FREE SHIPPING ON ORDERS OVER $75 • NEW DROP: SKATER BOY VOL. 2 • WORLDWIDE SHIPPING • JOIN THE DISCORD FOR
            EARLY ACCESS • FREE SHIPPING ON ORDERS OVER $75 • NEW DROP: SKATER BOY VOL. 2 • WORLDWIDE SHIPPING • JOIN
            THE DISCORD FOR EARLY ACCESS •
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="navigation">
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            MERCH<span> </span>OVRFLOW
          </Link>
          <div className="beta-badge">BETA</div>
        </div>

        {/* Links */}
        <div className="nav-links">
          <Link href="/#trending" className="nav-link">
            LATEST DROPS
          </Link>
          <Link href="/#trending" className="nav-link">
            CLOTHING
          </Link>
          <Link href="/#trending" className="nav-link">
            SNEAKERS
          </Link>
          <Link href="/#trending" className="nav-link">
            ACCESSORIES
          </Link>
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <div className="nav-icon" onClick={() => setSearchOpen(!searchOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <Link href="/profile" className="nav-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
          <Link href="/cart" className="cart-button">
            <svg
              className="cart-button-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-button-text">git add to-cart</span>
            {cartCount > 0 && <span className="cart-button-count">{cartCount}</span>}
          </Link>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-container" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for products..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </form>
            <button className="search-close" onClick={() => setSearchOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <main className="hero-section">
        {/* Left Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="season-badge">SEASON 04 // FALL COLLECTION</div>

          {/* Headline */}
          <h1 className="hero-headline">
            UNDEFINED BY
            <br />
            <span className="hero-headline-highlight">DRESS CODE.</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subtext">
            Premium t-shirts for developers. 100% cotton. 0% meetings.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <Link href="#trending" className="btn-primary hover-lift">
              SHOP THE DROP
            </Link>
            <Link href="#trending" className="btn-secondary hover-lift">
              VIEW LOOKBOOK
            </Link>
          </div>

        </div>

        {/* Right Visuals (Collage Style) */}
        <div className="hero-visuals">
          {/* Abstract Background Shape */}
          <svg
            className="abstract-shape"
            width="600"
            height="600"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#5D3FD3"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.6C59,41.7,47.1,49,35.3,55.1C23.5,61.2,11.8,66.1,-0.6,67.1C-12.9,68.1,-25.8,65.2,-37.9,59.2C-50,53.2,-61.3,44.1,-70.5,32.6C-79.7,21.1,-86.8,7.2,-85.1,-6.1C-83.3,-19.4,-72.7,-32.1,-61.6,-41.8C-50.5,-51.5,-38.9,-58.2,-27.1,-66.9C-15.3,-75.6,-3.3,-86.3,10.2,-83.8C23.7,-81.3,30.5,-83.6,44.7,-76.4Z"
              transform="translate(100 100)"
            ></path>
          </svg>

          {/* Main Image */}
          <div className="main-image-container">
            <img
              src="/placeholder.svg?height=800&width=640"
              alt="Kid in stylish streetwear hoodie"
            />
            <div className="price-tag">$45.00</div>
          </div>

          {/* Secondary Image (Floating) */}
          <div className="secondary-image">
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Kids sneakers close up"
            />
          </div>

          {/* Sticker Graphic */}
          <div className="sticker-graphic">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Sticker"
            />
            <div className="hot-badge">HOT</div>
          </div>

          {/* Decorative Star */}
          <svg
            className="decorative-star"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="#ccff00"
            stroke="#000"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
      </main>

      {/* Trending Strip */}
      <section className="trending-section" id="trending">
        <div className="container">
          <div className="trending-header">
            <h3>Trending Now</h3>
            <Link href="/shop">See All</Link>
          </div>

          <div className="product-grid">
            {/* Product 1 */}
            <Link href="/product/oversized-graffiti-tee" className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge new">NEW</span>
                <img
                  src="/placeholder.svg?height=460&width=400"
                  alt="Oversized Graffiti Tee"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>
              <h4>Oversized Graffiti Tee</h4>
              <p>$28.00</p>
            </Link>

            {/* Product 2 */}
            <Link href="/product/neon-beanie" className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="/placeholder.svg?height=460&width=400"
                  alt="Neon Beanie"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>
              <h4>Neon Beanie</h4>
              <p>$15.00</p>
            </Link>

            {/* Product 3 */}
            <Link href="/product/utility-cargo-pants" className="product-card hover-lift">
              <div className="product-image">
                <span className="product-badge sale">SALE</span>
                <img
                  src="/placeholder.svg?height=460&width=400"
                  alt="Utility Cargo Pants"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>
              <h4>Utility Cargo Pants</h4>
              <p>
                <span className="price-old">$55.00</span> $42.00
              </p>
            </Link>

            {/* Product 4 */}
            <Link href="/product/chunky-skate-shoes" className="product-card hover-lift">
              <div className="product-image">
                <img
                  src="/placeholder.svg?height=460&width=400"
                  alt="Chunky Skate Shoes"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
              </div>
              <h4>Chunky Skate Shoes</h4>
              <p>$65.00</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer Strip */}
      <footer className="footer">
        <div className="footer-content">
          <Link href="/" className="footer-logo">
            MerchOverflow
          </Link>
          <div className="footer-copyright">© 2025 MerchOverflow. All rights reserved. No bugs.</div>
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              Twitter/X
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
