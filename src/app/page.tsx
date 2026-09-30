import Galeria from '@/components/Galeria';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Productos from '@/components/Productos';
import QuienesSomos from '@/components/QuienesSomos';
import Valores from '@/components/Valores';

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <QuienesSomos />
      <Valores />
      <Galeria />
      <Productos  />
    </>
  );
}
