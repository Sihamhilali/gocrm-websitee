'use client';

import { Linkedin, Github, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleLinkClick = (page: string) => {
    onNavigate(page);
  };

  return (
    <footer className="mt-auto bg-navy">
      {/* Top Section */}
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-5 gap-12">
            {/* Column 1 — Brand (span 2) */}
            <div className="md:col-span-2 mb-10 md:mb-0">
              {/* Logo */}
              <img
                src="/logo-gocrm.png"
                alt="GoCRM"
                className="h-16 w-auto brightness-0 invert"
              />

              <p className="text-gray-400 text-sm mt-3">
                Manage &bull; Grow &bull; Succeed
              </p>
              <p className="text-gray-500 text-sm mt-2 max-w-xs">
                The all-in-one CRM + ERP platform for modern businesses.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                {/* Twitter/X */}
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Twitter"
                  onClick={() => handleLinkClick('twitter')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>

                {/* LinkedIn */}
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                  onClick={() => handleLinkClick('linkedin')}
                >
                  <Linkedin className="w-4 h-4 text-gray-400" />
                </button>

                {/* GitHub */}
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                  onClick={() => handleLinkClick('github')}
                >
                  <Github className="w-4 h-4 text-gray-400" />
                </button>

                {/* YouTube */}
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="YouTube"
                  onClick={() => handleLinkClick('youtube')}
                >
                  <Youtube className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Column 2 — Product */}
            <div>
              <h4 className="text-white font-semibold text-sm">Product</h4>
              <ul className="mt-4 space-y-1">
                {[
                  { label: 'Features', page: 'features' },
                  { label: 'Pricing', page: 'pricing' },
                  { label: 'Integrations', page: 'integrations' },
                  { label: 'Changelog', page: 'changelog' },
                  { label: 'API Docs', page: 'api-docs' },
                ].map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-gray-400 hover:text-white text-sm transition-colors py-1.5 block w-full text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Company */}
            <div>
              <h4 className="text-white font-semibold text-sm">Company</h4>
              <ul className="mt-4 space-y-1">
                {[
                  { label: 'About Us', page: 'about' },
                  { label: 'Blog', page: 'blog' },
                  { label: 'Careers', page: 'careers', badge: 'Hiring' },
                  { label: 'Press Kit', page: 'press-kit' },
                  { label: 'Contact', page: 'contact' },
                ].map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-gray-400 hover:text-white text-sm transition-colors py-1.5 flex items-center gap-2 w-full text-left"
                    >
                      {link.label}
                      {link.badge && (
                        <span className="text-xs text-orange font-medium">
                          {link.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Resources */}
            <div>
              <h4 className="text-white font-semibold text-sm">Resources</h4>
              <ul className="mt-4 space-y-1">
                {[
                  { label: 'Help Center', page: 'help-center' },
                  { label: 'Community', page: 'community' },
                  { label: 'Webinars', page: 'webinars' },
                  { label: 'Templates', page: 'templates' },
                  { label: 'Status Page', page: 'status' },
                ].map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-gray-400 hover:text-white text-sm transition-colors py-1.5 block w-full text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 — Legal */}
            <div>
              <h4 className="text-white font-semibold text-sm">Legal</h4>
              <ul className="mt-4 space-y-1">
                {[
                  { label: 'Privacy Policy', page: 'privacy' },
                  { label: 'Terms of Service', page: 'terms' },
                  { label: 'Cookie Policy', page: 'cookies' },
                  { label: 'GDPR', page: 'gdpr' },
                  { label: 'Security', page: 'security' },
                ].map((link) => (
                  <li key={link.page}>
                    <button
                      onClick={() => handleLinkClick(link.page)}
                      className="text-gray-400 hover:text-white text-sm transition-colors py-1.5 block w-full text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2025 GoCRM. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built for modern teams
          </p>
        </div>
      </div>
    </footer>
  );
}