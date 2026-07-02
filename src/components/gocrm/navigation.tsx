'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useScrollDirection } from '@/components/gocrm/animations';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';

interface NavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
  { label: 'Blog', id: 'blog' },
  { label: 'FAQ', id: 'faq' },
];

function GoCRMLogo() {
  return (
    <img
      src="/logo-gocrm.png"
      alt="GoCRM"
      className="h-16 w-auto"
    />
  );
}

export default function Navigation({ activePage, onNavigate }: NavigationProps) {
  const { scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = useCallback(
    (pageId: string) => {
      onNavigate(pageId);
      setMobileOpen(false);
    },
    [onNavigate]
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => handleNavigate('home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <GoCRMLogo />
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <motion.button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                activePage === link.id
                  ? 'text-navy font-semibold'
                  : 'text-gray-600 hover:text-navy'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
              {activePage === link.id && (
                <motion.span
                  className="absolute bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-orange"
                  layoutId="nav-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <motion.button
            onClick={() => handleNavigate('login')}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-navy"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
          <motion.button
            onClick={() => handleNavigate('pricing')}
            className="rounded-full bg-orange px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-hover hover:shadow-lg hover:shadow-orange/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <motion.button
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  scrolled ? 'text-navy hover:bg-gray-100' : 'text-navy hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </motion.button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] p-0 sm:w-[340px]">
              <SheetHeader className="border-b border-gray-200 px-6 py-5">
                <SheetTitle>
                  <GoCRMLogo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col overflow-y-auto px-4 py-4">
                <AnimatePresence>
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      onClick={() => handleNavigate(link.id)}
                      className={`flex items-center rounded-lg px-4 py-3 text-left text-[15px] font-medium transition-colors ${
                        activePage === link.id
                          ? 'bg-orange-light text-orange font-semibold'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-navy'
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </AnimatePresence>

                <div className="mt-4 flex flex-col gap-3 border-t border-gray-200 px-4 pt-5">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    onClick={() => handleNavigate('login')}
                    className="w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-navy"
                  >
                    Log In
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.42 }}
                    onClick={() => handleNavigate('pricing')}
                    className="w-full rounded-full bg-orange py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-hover hover:shadow-lg hover:shadow-orange/20"
                  >
                    Start Free Trial
                  </motion.button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}