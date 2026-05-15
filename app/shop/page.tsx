'use client'

import { useState } from 'react'
import { SlidersHorizontal, Star, ShoppingBag, Heart, ChevronDown } from 'lucide-react'
import { products } from '@/lib/products'
import Footer from '@/components/Footer'

const allCategories = ['All', 'Loungers', 'Head & Neck', 'Bed Bumpers', 'Feeding', 'Sleep']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated', 'Most Reviews']
const certOptions = ['CPSC', 'ASTM', 'CE', 'OEKO-TEX', 'GOTS']

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [selectedCerts, setSelectedCerts] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState(200)
  const [showFilters, setShowFilters] = useState(false)

  const toggleCert = (cert: string) => {
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    )
  }

  let filtered = products.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const certMatch = selectedCerts.length === 0 || selectedCerts.some((c) => p.certifications.includes(c))
    const priceMatch = p.price <= maxPrice
    return catMatch && certMatch && priceMatch
  })

  if (sortBy === 'Price: Low to High') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sortBy === 'Price: High to Low') filtered = [...filtered].sort((a, b) => b.price - a.price)
  if (sortBy === 'Best Rated') filtered = [...filtered].sort((a, b) => b.rating - a.rating)
  if (sortBy === 'Most Reviews') filtered = [...filtered].sort((a, b) => b.reviewCount - a.reviewCount)

  return (
    <>
      {/* Page header */}
      <div className="bg-gradient-to-br from-sage-800 to-sage-900 text-white py-14">
        <div className="section-padding">
          <p className="text-sage-300 text-sm mb-2">Home / Shop</p>
          <h1 className="text-4xl lg:text-5xl font-serif">All Products</h1>
          <p className="text-sage-300 mt-2">{filtered.length} safety-certified products</p>
        </div>
      </div>

      <div className="section-padding py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className={`lg:w-56 xl:w-64 shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-sm p-5 space-y-6 sticky top-24">
              <h3 className="font-semibold text-sage-900">Filters</h3>

              {/* Category */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Category</h4>
                <div className="space-y-1.5">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                        activeCategory === cat
                          ? 'bg-sage-100 text-sage-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price range */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                  Max Price: <span className="text-sage-700">${maxPrice}</span>
                </h4>
                <input
                  type="range"
                  min={20}
                  max={200}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-sage-600"
                />
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Certifications</h4>
                <div className="space-y-2">
                  {certOptions.map((cert) => (
                    <label key={cert} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCerts.includes(cert)}
                        onChange={() => toggleCert(cert)}
                        className="accent-sage-600 w-3.5 h-3.5"
                      />
                      <span className="text-sm text-gray-600">{cert}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <button
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-sage-700 bg-white border border-sage-200 px-4 py-2 rounded-full"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal size={15} />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-500 hidden sm:block">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-200 text-sm px-4 py-2 pr-8 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-sage-400 cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <div className="text-5xl mb-4">🔍</div>
                <p>No products match your filters. Try adjusting.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    <div className={`relative h-48 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
                      {product.badge && (
                        <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${
                          product.badge === 'Bestseller' ? 'bg-blush-500 text-white' :
                          product.badge === 'New' ? 'bg-sage-600 text-white' :
                          'bg-amber-400 text-white'
                        }`}>
                          {product.badge}
                        </span>
                      )}
                      <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart size={13} className="text-gray-400 hover:text-blush-500" />
                      </button>
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.certifications.map((cert) => (
                          <span key={cert} className="badge-safety text-[10px]">✓ {cert}</span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{product.category}</p>
                      <h3 className="font-serif font-semibold text-gray-900 mt-0.5">{product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1.5 flex-1 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className={i < Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'} />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">{product.rating} ({product.reviewCount.toLocaleString()})</span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold text-sage-800">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <button className="flex items-center gap-1 bg-sage-50 hover:bg-sage-600 text-sage-700 hover:text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200">
                          <ShoppingBag size={13} />
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
