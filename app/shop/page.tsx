"use client"

import type React from "react"
import { useState, useMemo } from "react"
import Link from "next/link"
import { useCart } from "@/context/cart-context"

const allProducts = [
  { id: 1, name: "Oversized Graffiti Tee", price: 28, originalPrice: null, category: "clothing", badge: "NEW", slug: "oversized-graffiti-tee", image: "graffiti-tee" },
  { id: 2, name: "Neon Beanie", price: 15, originalPrice: null, category: "accessories", badge: null, slug: "neon-beanie", image: "neon-beanie" },
  { id: 3, name: "Utility Cargo Pants", price: 42, originalPrice: 55, category: "clothing", badge: "SALE", slug: "utility-cargo-pants", image: "cargo-pants" },
  { id: 4, name: "Chunky Skate Shoes", price: 65, originalPrice: null, category: "sneakers", badge: null, slug: "chunky-skate-shoes", image: "skate-shoes" },
  { id: 5, name: "Debug Mode Hoodie", price: 58, originalPrice: null, category: "clothing", badge: "NEW", slug: "debug-mode-hoodie", image: "debug-hoodie" },
  { id: 6, name: "404 Cap", price: 22, originalPrice: null, category: "accessories", badge: null, slug: "404-cap", image: "404-cap" },
  { id: 7, name: "Console.log Tee", price: 32, originalPrice: 40, category: "clothing", badge: "SALE", slug: "console-log-tee", image: "console-tee" },
  { id: 8, name: "Stack Overflow Sneakers", price: 89, originalPrice: null, category: "sneakers", badge: "NEW", slug: "stack-overflow-sneakers", image: "stack-sneakers" },
  { id: 9, name: "Git Commit Jacket", price: 95, originalPrice: null, category: "clothing", badge: null, slug: "git-commit-jacket", image: "git-jacket" },
  { id: 10, name: "Syntax Error Socks", price: 12, originalPrice: null, category: "accessories", badge: null, slug: "syntax-error-socks", image: "syntax-socks" },
  { id: 11, name: "Binary Joggers", price: 48, originalPrice: 60, category: "clothing", badge: "SALE", slug: "binary-joggers", image: "binary-joggers" },
  { id: 12, name: "Localhost Slides", price: 35, originalPrice: null, category: "sneakers", badge: null, slug: "localhost-slides", image: "localhost-slides" },
]

type SortOption = "newest" | "price-low" | "price-high" | "name"

export default function ShopPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { cartCount } = useCart()
  
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [showOnSale, setShowOnSale] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchOpen(false)
  }

  const filteredAndSortedProducts = useMemo(() => {
    let products = [...allProducts]

    // Filter by category
    if (selectedCategory !== "all") {
      products = products.filter(p => p.category === selectedCategory)
    }

    // Filter by sale
    if (showOnSale) {
      products = products.filter(p => p.originalPrice !== null)
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        products.sort((a, b) => b.price - a.price)
        break
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "newest":
      default:
        // Keep original order (newest first)
        break
    }

    return products
  }, [selectedCategory, sortBy, showOnSale])

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
        <div className="logo">
          <Link href="/">
            MERCH<span> </span>OVRFLOW
          </Link>
          <div className="beta-badge">BETA</div>
        </div>

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

      {/* Shop Header */}
      <section className="shop-section">
        <div className="container">
          <div className="shop-header">
            <h1 className="shop-title">ALL PRODUCTS</h1>
            <p className="shop-subtitle">{filteredAndSortedProducts.length} items</p>
          </div>

          {/* Filters and Sorters */}
          <div className="shop-controls">
            <div className="shop-filters">
              <div className="filter-group">
                <label className="filter-label">Category</label>
                <select 
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="clothing">Clothing</option>
                  <option value="sneakers">Sneakers</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <button 
                className={`filter-toggle ${showOnSale ? "active" : ""}`}
                onClick={() => setShowOnSale(!showOnSale)}
              >
                On Sale
              </button>
            </div>

            <div className="shop-sorter">
              <label className="filter-label">Sort by</label>
              <select 
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid shop-grid">
            {filteredAndSortedProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.slug}`} 
                className="product-card hover-lift"
              >
                <div className="product-image">
                  {product.badge && (
                    <span className={`product-badge ${product.badge.toLowerCase()}`}>
                      {product.badge}
                    </span>
                  )}
                  <img
                    src="/placeholder.svg?height=460&width=400"
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <h4>{product.name}</h4>
                <p>
                  {product.originalPrice && (
                    <span className="price-old">${product.originalPrice.toFixed(2)}</span>
                  )}{" "}
                  ${product.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="empty-state">
              <p>No products found matching your filters.</p>
              <button 
                className="btn-secondary"
                onClick={() => {
                  setSelectedCategory("all")
                  setShowOnSale(false)
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
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
