import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Gallery from '@/components/Gallery/Gallery';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Products from '@/components/Products/Products';
import Values from '@/components/Values/Values';

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
