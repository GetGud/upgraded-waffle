import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/products'

const categoryColors = [
  'from-sage-100 to-sage-200 hover:from-sage-200 hover:to-sage-300',
  'from-blush-100 to-blush-200 hover:from-blush-200 hover:to-blush-300',
  'from-cream-200 to-cream-300 hover:from-cream-300 hover:to-cream-400',
  'from-sage-50 to-blush-100 hover:from-sage-100 hover:to-blush-200',
]

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-20 bg-cream-50">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blush-500 tracking-widest uppercase mb-3">
            Shop by Category
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-sage-900">
            Everything your baby needs
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Curated collections of safety-certified products, sourced from trusted manufacturers around the world.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.slug}
              href={`/shop?cat=${cat.slug}`}
              className={`group relative rounded-2xl bg-gradient-to-br ${categoryColors[i]} p-6 lg:p-8 transition-all duration-300 card-hover cursor-pointer`}
            >
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="font-serif text-lg font-semibold text-sage-900 leading-tight">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{cat.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-sage-700">
                <span>{cat.count} products</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
