'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '@/components/gocrm/navigation';
import Hero from '@/components/gocrm/hero';
import Footer from '@/components/gocrm/footer';
import {
  TrustedBy,
  WhyGoCRM,
  DashboardPreview,
  FeaturesSection,
  GrowthSection,
  HowItWorks,
  Testimonials,
  PricingPreview,
  FAQSection,
  CTASection,
} from '@/components/gocrm/home-sections';
import {
  FeaturesPage,
  SolutionsPage,
  AboutPage,
  ContactPage,
  BlogPage,
  FAQPage,
} from '@/components/gocrm/inner-pages';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhyGoCRM />
      <DashboardPreview />
      <FeaturesSection />
      <GrowthSection />
      <HowItWorks />
      <Testimonials />
      <PricingPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}

function PricingPageWrapper() {
  return (
    <>
      <motion.div
        className="pt-32 pb-20 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </motion.div>
      <PricingPreview />
      <CTASection />
    </>
  );
}

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = useCallback((page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <HomePage />
            </motion.div>
          )}
          {activePage === 'features' && (
            <motion.div
              key="features"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FeaturesPage />
            </motion.div>
          )}
          {activePage === 'solutions' && (
            <motion.div
              key="solutions"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <SolutionsPage />
            </motion.div>
          )}
          {activePage === 'pricing' && (
            <motion.div
              key="pricing"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PricingPageWrapper />
            </motion.div>
          )}
          {activePage === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <AboutPage />
            </motion.div>
          )}
          {activePage === 'contact' && (
            <motion.div
              key="contact"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ContactPage />
            </motion.div>
          )}
          {activePage === 'blog' && (
            <motion.div
              key="blog"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <BlogPage />
            </motion.div>
          )}
          {activePage === 'faq' && (
            <motion.div
              key="faq"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <FAQPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}