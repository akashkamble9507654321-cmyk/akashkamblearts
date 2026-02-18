
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import SectionHeader from './components/SectionHeader';
import ImageGrid from './components/ImageGrid';
import Lightbox from './components/Lightbox';
import Footer from './sections/Footer';
import { PORTFOLIO_DATA } from './constants';
import { PortfolioItem } from './types';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const conceptualItems = PORTFOLIO_DATA.filter(
    item => item.category === 'conceptual'
  );
  const portraitItems = PORTFOLIO_DATA.filter(
    item => item.category === 'portrait'
  );
  const graphicsItems = PORTFOLIO_DATA.filter(
    item => item.category === 'graphics'
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <section
          id="conceptual"
          className="py-24 md:py-40 px-6 md:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Conceptual Sketches"
              subtitle="Abstract Narratives & Form Studies"
            />
            <ImageGrid
              items={conceptualItems}
              onItemClick={setSelectedItem}
            />
          </div>
        </section>

        <section
          id="portrait"
          className="py-24 md:py-40 px-6 md:px-12"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Portraits"
              subtitle="The Human Condition Rendered"
            />
            <ImageGrid
              items={portraitItems}
              onItemClick={setSelectedItem}
            />
          </div>
        </section>

        <section
          id="graphics"
          className="py-24 md:py-40 px-6 md:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Graphics Work"
              subtitle="Visual Identity & Cinematic Posters"
            />
            <ImageGrid
              items={graphicsItems}
              onItemClick={setSelectedItem}
            />
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default App;
