import { ProductPackage, ShelfBoard } from '@/components/ProductShelf';
import { nombreDe, type Linea, type Producto } from '@/data/products';

const SABORES_VISIBLES = 12;

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

type ProductDetailProps =
  | { tipo: 'producto'; item: Producto; onClose: () => void }
  | { tipo: 'linea'; item: Linea; showAll: boolean; onToggleSabores: () => void };

export default function ProductDetail(props: ProductDetailProps) {
  const { item } = props;
  const nombre = nombreDe(item);
  const sabores: string[] =
    props.tipo === 'linea'
      ? props.showAll
        ? props.item.sabores
        : props.item.sabores.slice(0, SABORES_VISIBLES)
      : [];
  const saboresId = `sabores-${item.id}`;

  return (
    <div className="detalle">
      <div className="detalle__envase">
        <ProductPackage envase={item} />
        <ShelfBoard />
      </div>

      <div className="ficha">
        {props.tipo === 'producto' && (
          <button type="button" className="ficha__cerrar" aria-label="Cerrar detalle" onClick={props.onClose}>
            <span aria-hidden="true">×</span>
          </button>
        )}

        <h3 className="ficha__titulo">{nombre}</h3>
        <p className="ficha__descripcion">{item.descripcion}</p>

        <div className="ficha__sellos">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ficha__sello" src="/images/sello-sin-gluten.svg" alt="Sin gluten" width={64} height={64} />
          {props.tipo === 'producto' && props.item.extra && (
            <p className="ficha__extra">{props.item.extra}</p>
          )}
        </div>

        {props.tipo === 'linea' && (
          <>
            <ul className="ficha__sabores" id={saboresId} aria-label={`Sabores de ${nombre}`}>
              {sabores.map((sabor) => (
                <li key={sabor} className="ficha__chip">
                  {sabor}
                </li>
              ))}
            </ul>
            {props.item.sabores.length > SABORES_VISIBLES && (
              <button
                type="button"
                className="ficha__toggle"
                aria-expanded={props.showAll}
                aria-controls={saboresId}
                onClick={props.onToggleSabores}
              >
                {props.showAll ? 'Ver menos sabores' : `Ver los ${props.item.sabores.length} sabores`}
              </button>
            )}
          </>
        )}

        <a className="ficha__comprar" href={item.link} target="_blank" rel="noopener noreferrer">
          <HandshakeIcon />
          Comprar en Mercadolibre
          <span className="productos-sr"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </div>
  );
}
