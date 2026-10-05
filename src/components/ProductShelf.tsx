import Image from 'next/image';
import { nombreDe, type Envase } from '@/data/products';

/** Envase: imagen real o placeholder dibujado con los colores del producto. */
export function ProductPackage({ envase }: { envase: Envase }) {
  const nombre = nombreDe(envase);

  if (envase.imagen) {
    return (
      <div className="envase envase--img">
        <Image
          src={envase.imagen}
          alt={`Envase de ${nombre} de Gusteau's`}
          fill
          loading="lazy"
          sizes="(max-width: 767px) 33vw, (max-width: 1023px) 20vw, 300px"
        />
      </div>
    );
  }

  return (
    <div className="envase" style={{ backgroundColor: envase.bg, color: envase.ink }} aria-hidden="true">
      {envase.l1 && <span className="envase__l1">{envase.l1}</span>}
      <span className="envase__l2">{envase.l2}</span>
    </div>
  );
}

/** Tabla del estante (sin contenido). */
export function ShelfBoard() {
  return (
    <div className="estante__tabla-wrap" aria-hidden="true">
      <div className="estante__tabla" />
    </div>
  );
}

interface ProductShelfProps {
  items: Envase[];
  perRow: number;
  onSelect: (id: string) => void;
}

export default function ProductShelf({ items, perRow, onSelect }: ProductShelfProps) {
  return (
    <div className="estante">
      <ul className="estante__fila" style={{ '--per-row': perRow } as React.CSSProperties}>
        {items.map((item) => {
          const nombre = nombreDe(item);
          return (
            <li key={item.id} className="estante__item">
              <button
                type="button"
                className="estante__producto"
                aria-label={nombre}
                title={nombre}
                onClick={() => onSelect(item.id)}
              >
                <ProductPackage envase={item} />
              </button>
            </li>
          );
        })}
      </ul>
      <ShelfBoard />
    </div>
  );
}
