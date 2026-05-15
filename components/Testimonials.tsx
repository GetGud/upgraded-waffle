import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Austin, TX',
    rating: 5,
    product: 'Cloud Lounger Pro',
    text: 'I was skeptical about loungers after all the recalls in the news, but TinyNest\'s CPSC certification gave me confidence. My 6-week-old loves it for supervised tummy time. The organic cotton is so soft!',
    avatar: '👩',
    date: '3 weeks ago',
  },
  {
    name: 'Priya K.',
    location: 'Seattle, WA',
    rating: 5,
    product: 'NestPillow Nursing Cushion',
    text: 'This nursing pillow is a lifesaver. I use it for breastfeeding, bottle feeding, and now tummy time. The shape is perfect and it\'s held up through 100+ washes. Worth every penny.',
    avatar: '👩🏽',
    date: '1 month ago',
  },
  {
    name: 'Emma L.',
    location: 'Chicago, IL',
    rating: 5,
    product: 'DreamNest Head Support',
    text: 'My pediatrician actually recommended TinyNest after I asked about head-shaping support. The memory foam is gentle but supportive. My baby looks so comfortable in his stroller now.',
    avatar: '👩🏻',
    date: '2 months ago',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="section-padding">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blush-500 tracking-widest uppercase mb-3">
            Real Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif text-sage-900">
            What mothers are saying
          </h2>
        </div>

        {/* Overall rating bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 p-6 bg-white rounded-2xl shadow-sm max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-serif font-bold text-sage-800">4.9</div>
            <div className="flex items-center justify-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-1">Overall rating</div>
          </div>
          <div className="space-y-1.5 flex-1 min-w-[180px]">
            {[
              { stars: 5, pct: 87 },
              { stars: 4, pct: 9 },
              { stars: 3, pct: 3 },
              { stars: 2, pct: 1 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 w-4">{row.stars}</span>
                <Star size={10} className="fill-amber-400 text-amber-400" />
                <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                  <div
                    className="bg-amber-400 h-1.5 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="text-gray-400 text-xs w-7">{row.pct}%</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sage-800">14,800+</div>
            <div className="text-sm text-gray-500">Verified reviews</div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-xl">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.location}</div>
                  </div>
                </div>
                <Quote size={18} className="text-sage-200" />
              </div>

              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>

              <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs text-sage-600 font-medium">✓ {t.product}</span>
                <span className="text-xs text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
