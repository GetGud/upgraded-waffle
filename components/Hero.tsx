import { ArrowRight, Shield, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 min-h-[90vh] flex items-center">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sage-100/50 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blush-100/40 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="section-padding w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-7 relative z-10 animate-fade-in">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage-200 rounded-full px-4 py-2 text-sm text-sage-700">
              <Shield size={14} className="text-sage-500" />
              <span className="font-medium">CPSC & ASTM Certified Products</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold leading-tight text-sage-900">
              Where little{' '}
              <span className="italic text-sage-600">ones</span>{' '}
              rest easy
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Safety-certified baby essentials trusted by over 50,000 mothers.
              Every product rigorously tested, thoughtfully designed.
            </p>

            {/* Social proof stars */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                <strong className="text-gray-800">4.9/5</strong> from 14,800+ reviews
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/shop" className="btn-primary inline-flex items-center gap-2">
                Shop Bestsellers
                <ArrowRight size={16} />
              </a>
              <a href="#categories" className="btn-outline inline-flex items-center gap-2">
                Browse by Category
              </a>
            </div>

            {/* Micro-trust row */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-sage-100">
              {[
                { icon: '🚀', label: 'Free shipping $65+' },
                { icon: '↩️', label: '30-day returns' },
                { icon: '🛡️', label: 'Safety guaranteed' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero visual */}
          <div className="relative flex items-center justify-center">
            {/* Main hero card */}
            <div className="relative w-full max-w-md">
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 z-20 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-lg">🌙</div>
                <div>
                  <div className="text-xs text-gray-500">Just ordered</div>
                  <div className="text-sm font-semibold text-gray-800">Cloud Lounger Pro</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 z-20 animate-fade-in">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-gray-600 max-w-[140px]">
                  "Best purchase I made for my newborn!"
                </div>
                <div className="text-xs text-gray-400 mt-1">— Sarah M., verified buyer</div>
              </div>

              {/* Main product display */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sage-100 to-sage-200 aspect-square flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4 p-8">
                  <div className="text-8xl">🌙</div>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-lg font-serif font-semibold text-sage-800">Cloud Lounger Pro</div>
                    <div className="text-sm text-gray-500 mt-1">Organic cotton · Kapok fill</div>
                    <div className="mt-2 flex items-center justify-center gap-2">
                      <span className="text-blush-600 font-bold text-xl">$89</span>
                      <span className="text-gray-400 line-through text-sm">$119</span>
                    </div>
                    <div className="mt-3 badge-safety mx-auto w-fit">
                      ✓ CPSC Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
