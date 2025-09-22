"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full mt-16"
      style={{
        background: 'linear-gradient(135deg, #2d5016 0%, #1a3009 100%)'
      }}
    >
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h2 
                className="text-3xl font-bold mb-4 flex items-center"
                style={{ color: '#d4af37' }}
              >
                <div 
                  className="w-10 h-10 rounded-full mr-3 flex items-center justify-center"
                  style={{ background: '#d4af37' }}
                >
                  <div 
                    className="w-6 h-6 rounded-full"
                    style={{ background: '#2d5016' }}
                  ></div>
                </div>
                AyurvedaCare
              </h2>
              <p 
                className="text-lg leading-relaxed mb-4"
                style={{ color: '#f9f6ea' }}
              >
                Bridging ancient Ayurvedic wisdom with modern healthcare to provide 
                holistic healing experiences for mind, body, and spirit.
              </p>
              <div 
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                  color: '#2d5016'
                }}
              >
                Traditional Healing • Modern Care
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div 
                  className="w-6 h-6 rounded mr-3"
                  style={{ background: '#6b8e23' }}
                ></div>
                <a 
                  href="mailto:info@ayurvedacare.com"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: '#f9f6ea' }}
                >
                  info@ayurvedacare.com
                </a>
              </div>
              <div className="flex items-center">
                <div 
                  className="w-6 h-6 rounded mr-3"
                  style={{ background: '#8b4513' }}
                ></div>
                <a 
                  href="tel:+911234567890"
                  className="hover:underline transition-colors duration-300"
                  style={{ color: '#f9f6ea' }}
                >
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-start">
                <div 
                  className="w-6 h-6 rounded mr-3 mt-1"
                  style={{ background: '#d4af37' }}
                ></div>
                <span style={{ color: '#f9f6ea' }}>
                  123 Wellness Street, Ayurveda Plaza<br />
                  Mumbai, Maharashtra 400001, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: '#d4af37' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'All Therapies', href: '/therapies' },
                { label: 'Find Practitioners', href: '/doctors' },
                { label: 'Book Session', href: '/book' },
                { label: 'Patient Dashboard', href: '/dashboard' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:underline"
                    style={{ 
                      color: '#f9f6ea',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Legal */}
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: '#d4af37' }}
            >
              Services
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                'Panchakarma Therapy',
                'Abhyanga Massage',
                'Herbal Consultations',
                'Yoga Therapy',
                'Meditation Sessions',
                'Nutritional Guidance'
              ].map((service) => (
                <li 
                  key={service}
                  className="text-sm"
                  style={{ color: '#f9f6ea' }}
                >
                  {service}
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <div className="space-y-2">
              <h4 
                className="font-semibold text-sm"
                style={{ color: '#6b8e23' }}
              >
                Legal
              </h4>
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Medical Disclaimer', href: '/disclaimer' }
              ].map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs transition-colors duration-300 hover:underline"
                    style={{ color: '#f9f6ea' }}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.3)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div>
              <h4 
                className="font-semibold mb-4 text-center md:text-left"
                style={{ color: '#d4af37' }}
              >
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', href: 'https://facebook.com' },
                  { name: 'Instagram', href: 'https://instagram.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'YouTube', href: 'https://youtube.com' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                      color: '#2d5016'
                    }}
                    title={social.name}
                  >
                    <div className="w-4 h-4 rounded-full" style={{ background: '#2d5016' }}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h4 
                className="font-semibold mb-4"
                style={{ color: '#d4af37' }}
              >
                Stay Updated
              </h4>
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    background: '#f9f6ea',
                    color: '#2d5016',
                    borderColor: '#d4af37'
                  }}
                />
                <button
                  className="px-6 py-2 rounded-r-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(45deg, #d4af37, #f4e6a1)',
                    color: '#2d5016'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="py-4"
        style={{
          background: 'linear-gradient(90deg, #1a3009, #2d5016)',
          borderTop: '1px solid rgba(212, 175, 55, 0.3)'
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-sm text-center md:text-left"
              style={{ color: '#f9f6ea' }}
            >
              © {currentYear} AyurvedaCare. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs" style={{ color: '#f9f6ea' }}>
              <span>Certified Ayurvedic Practitioners</span>
              <span>•</span>
              <span>Licensed Healthcare Facility</span>
              <span>•</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div 
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #d4af37, #6b8e23, #8b4513, #d4af37)'
        }}
      ></div>
    </footer>
  );
}
