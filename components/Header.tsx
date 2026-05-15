'use client'

import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X, Search, Heart } from 'lucide-react'

const navLinks = [
  { label: 'Shop All', href: '/shop' },
  { label: 'Loungers', href: '/shop?cat=loungers' },
  { label: 'Feeding', href: '/shop?cat=feeding' },
  { label: 'Sleep', href: '/shop?cat=sleep' },
  { label: 'Our Story', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(2)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-sage-700 text-white text-center py-2 text-xs tracking-widest font-medium">
        FREE SHIPPING ON ORDERS OVER $65 · USE CODE <span className="underline cursor-pointer">NEST10</span> FOR 10% OFF
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-cream-50/95 backdrop-blur-sm'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white text-sm font-bold group-hover:bg-sage-700 transition-colors">
                T
              </div>
              <span className="font-serif text-xl font-semibold text-sage-800 tracking-tight">
                TinyNest
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-sage-700 transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sage-500 group-hover:w-full transition-all duration-200" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex p-2 text-gray-500 hover:text-sage-700 transition-colors rounded-full hover:bg-sage-50">
                <Search size={18} />
              </button>
              <button className="hidden sm:flex p-2 text-gray-500 hover:text-blush-500 transition-colors rounded-full hover:bg-blush-50">
                <Heart size={18} />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-sage-700 transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-blush-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden p-2 text-gray-600"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-3 shadow-lg animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-700 font-medium hover:text-sage-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
