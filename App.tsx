import React, { useState, lazy, Suspense, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import { PORTFOLIO_DATA } from './constants';
import { PortfolioItem } from './types';

// Lazy load heavy components
const Hero = lazy(() => import('./sections/Hero'));
const SectionHeader = lazy(() => import('./components/SectionHeader'));
const ImageGrid = lazy(() => import('./components/ImageGrid'));
const Lightbox = lazy(() => import('./components/Lightbox'));

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const conceptualItems = useMemo(
    () => PORTFOLIO_DATA.filter(item => item.category === 'conceptual'),
    []
  );

  const portraitItems = useMemo(
    () => PORTFOLIO_DATA.filter(item => item.category === 'portrait'),
    []
  );

  const graphicsItems = useMemo(
    () => PORTFOLIO_DATA.filter(item => item.category === 'graphics'),
    []
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* FIXED GLOBAL BACKGROUND */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgg.png')" }}
      />

      {/* SINGLE OVERLAY (same everywhere) */}
      <div className="fixed inset-0 -z-10 bg-black/10" />

      <Navbar />

      <main className="relative z-10">
        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div className="h-40" />}>
          <section
            id="conceptual"
            className="py-24 md:py-40 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                title="Conceptual Sketches"
                subtitle="Culturally Rooted Conceptual Artworks"
              />
              <ImageGrid
                items={conceptualItems}
                onItemClick={setSelectedItem}
              />
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-40" />}>
          <section
            id="portrait"
            className="py-24 md:py-40 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                title="Portraits"
                subtitle="Portrait Art That Preserves Identity"
              />
              <ImageGrid
                items={portraitItems}
                onItemClick={setSelectedItem}
              />
            </div>
          </section>
        </Suspense>

        <Suspense fallback={<div className="h-40" />}>
          <section
            id="graphics"
            className="py-24 md:py-40 px-6 md:px-12"
          >
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                title="Graphics Work"
                subtitle="Where Ideas Take Shape"
              />
              <ImageGrid
                items={graphicsItems}
                onItemClick={setSelectedItem}
              />
            </div>
          </section>
        </Suspense>
      </main>

      <Footer />

      {selectedItem && (
        <Suspense fallback={null}>
          <Lightbox
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default App;
