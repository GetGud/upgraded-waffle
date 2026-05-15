const badges = [
  { icon: '🛡️', title: 'CPSC Certified', subtitle: 'US safety standard' },
  { icon: '✅', title: 'ASTM Tested', subtitle: 'International benchmark' },
  { icon: '🌿', title: 'OEKO-TEX', subtitle: 'Toxin-free materials' },
  { icon: '♻️', title: 'Organic Cotton', subtitle: 'GOTS certified fabrics' },
  { icon: '🚼', title: '50k+ Moms Trust Us', subtitle: 'Community verified' },
]

export default function TrustBar() {
  return (
    <section className="bg-sage-700 text-white py-8">
      <div className="section-padding">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {badges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <span className="text-2xl">{b.icon}</span>
              <div>
                <div className="text-sm font-semibold">{b.title}</div>
                <div className="text-xs text-sage-200">{b.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
