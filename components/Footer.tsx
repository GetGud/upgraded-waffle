import { Instagram, Facebook, Youtube, Shield } from 'lucide-react'

const links = {
  Shop: ['Loungers', 'Head & Neck Support', 'Bed Bumpers', 'Feeding & Nursing', 'Sleep Accessories', 'Gift Sets'],
  Help: ['Shipping & Returns', 'Size Guides', 'Safety Information', 'FAQs', 'Track Your Order', 'Contact Us'],
  Company: ['Our Story', 'Safety Standards', 'Blog', 'Affiliate Program', 'Press'],
}

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-white">
      {/* Main footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white text-sm font-bold">T</div>
              <span className="font-serif text-xl font-semibold">TinyNest</span>
            </div>
            <p className="text-sage-300 text-sm leading-relaxed mb-6 max-w-xs">
              Trusted, safety-certified baby essentials for every nest. Because your baby deserves only the best.
            </p>
            {/* Safety cert logos */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['CPSC', 'ASTM', 'CE', 'OEKO-TEX'].map((cert) => (
                <span key={cert} className="flex items-center gap-1 text-xs bg-sage-800 text-sage-300 px-2.5 py-1 rounded-full">
                  <Shield size={10} />
                  {cert}
                </span>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-sage-800 hover:bg-sage-700 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm uppercase tracking-widest text-sage-400 mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-sage-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sage-800 py-5">
        <div className="section-padding flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sage-400">
          <span>© 2025 TinyNest. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-2">
            <span>Payments:</span>
            {['Visa', 'MC', 'Amex', 'PayPal', 'Shop'].map((p) => (
              <span key={p} className="bg-sage-800 text-sage-300 px-1.5 py-0.5 rounded text-[10px]">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
