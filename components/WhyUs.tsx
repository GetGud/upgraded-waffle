const features = [
  {
    emoji: '🔬',
    title: 'Rigorously Tested',
    description:
      'Every product undergoes third-party safety testing. We only list items that meet or exceed CPSC, ASTM, and CE standards.',
  },
  {
    emoji: '🌿',
    title: 'Natural Materials',
    description:
      'Organic cotton, hypoallergenic kapok filling, and toxin-free fabrics. Because your baby\'s skin deserves nothing less.',
  },
  {
    emoji: '🤱',
    title: 'Mother-Designed',
    description:
      'Our products are curated with input from thousands of mothers. Real feedback shapes every listing on TinyNest.',
  },
  {
    emoji: '📦',
    title: 'Fast, Safe Shipping',
    description:
      'Orders ship in 1–2 business days. Free shipping over $65. Our packaging is designed to protect products and the planet.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-sage-800 to-sage-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-sage-300 blur-3xl" />
      </div>

      <div className="section-padding relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sage-300 tracking-widest uppercase mb-3">
            The TinyNest Difference
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-white">
            Why 50,000+ mothers<br />
            <span className="italic text-sage-300">choose us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-200"
            >
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="font-serif text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-sage-200 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            { value: '50k+', label: 'Happy Mothers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '85+', label: 'Products Curated' },
            { value: '0', label: 'Safety Recalls' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-serif font-bold text-white">{stat.value}</div>
              <div className="text-sm text-sage-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
