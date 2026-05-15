'use client'

import { useState } from 'react'
import { Star, ShoppingBag, Heart } from 'lucide-react'
import { products } from '@/lib/products'

function ProductCard({ product }: { product: typeof products[0] }) {
  const [liked, setLiked] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Product image area */}
      <div className={`relative h-52 bg-gradient-to-br ${product.color} flex items-center justify-center overflow-hidden`}>
        <span className="text-7xl transition-transform duration-300 group-hover:scale-110">{product.emoji}</span>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              product.badge === 'Bestseller' ? 'bg-blush-500 text-white' :
              product.badge === 'New' ? 'bg-sage-600 text-white' :
              product.badge === 'Top Rated' ? 'bg-amber-400 text-white' :
              'bg-red-500 text-white'
            }`}>
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-100 text-red-600">
              Save ${product.originalPrice - product.price}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <Heart
            size={14}
            className={liked ? 'fill-blush-500 text-blush-500' : 'text-gray-400'}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {product.certifications.map((cert) => (
            <span key={cert} className="badge-safety text-[10px]">
              ✓ {cert}
            </span>
          ))}
        </div>

        <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="font-serif font-semibold text-gray-900 leading-tight">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1.5 flex-1 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-3">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={i < Math.round(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200 fill-gray-200'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-sage-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              added
                ? 'bg-sage-600 text-white scale-95'
                : 'bg-sage-50 text-sage-700 hover:bg-sage-600 hover:text-white'
            }`}
          >
            <ShoppingBag size={14} />
            {added ? 'Added!' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Loungers', 'Head & Neck', 'Feeding', 'Sleep']

  const filtered = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter || (activeFilter === 'Sleep' && p.category === 'Sleep'))

  return (
    <section className="py-20 bg-white">
      <div className="section-padding">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-blush-500 tracking-widest uppercase mb-3">
              Our Products
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif text-sage-900">
              Mother-approved<br />
              <span className="italic text-sage-600">bestsellers</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-sage-600 text-white shadow-sm'
                    : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/shop" className="btn-outline inline-flex items-center gap-2">
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
