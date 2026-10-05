import About from '@/components/About';
import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Values from '@/components/Values';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Values />
      <Gallery />
      <Products />
      <Contact />
    </>
  );
}
