'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import {
  categorias,
  lineas,
  productos,
  type CategoriaId,
  type Linea,
  type Producto,
  type SubcategoriaId,
} from '@/data/products';

const SABORES_VISIBLES = 12;
const ML_LABEL = 'Comprar en Mercado Libre';

// Muestra un bloque placeholder si la imagen todavía no existe en /public
function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="producto-card__img producto-card__img--placeholder" role="img" aria-label={alt}>
        <span aria-hidden="true">Imagen próximamente</span>
      </div>
    );
  }

  return (
    <div className="producto-card__img">
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
        onError={() => setError(true)}
      />
    </div>
  );
}

function SinTacc() {
  return (
    <span className="producto-card__tacc">
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M5 19 19 5" stroke="currentColor" strokeWidth="2" />
      </svg>
      Sin TACC
    </span>
  );
}

function ProductCard({ producto }: { producto: Producto }) {
  return (
    <article className="producto-card">
      <ProductImage src={producto.imagen} alt={`Paquete de ${producto.nombre} de Gusteau's`} />
      <div className="producto-card__body">
        <h3 className="producto-card__title">{producto.nombre}</h3>
        <p className="producto-card__subtitle">{producto.subtitulo}</p>
        <SinTacc />
        <a className="producto-card__btn" href={producto.link} target="_blank" rel="noopener noreferrer">
          {ML_LABEL}
          <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
        </a>
      </div>
    </article>
  );
}

function LineCard({ linea }: { linea: Linea }) {
  const [expandido, setExpandido] = useState(false);
  const hayMas = linea.sabores.length > SABORES_VISIBLES;
  const sabores = expandido ? linea.sabores : linea.sabores.slice(0, SABORES_VISIBLES);
  const listaId = `sabores-${linea.id}`;

  return (
    <article className="producto-card producto-card--linea">
      <ProductImage src={linea.imagenes[0]} alt={`Línea de ${linea.nombre} de Gusteau's`} />
      <div className="producto-card__body">
        <h3 className="producto-card__title">{linea.nombre}</h3>
        <p className="producto-card__subtitle">{linea.subtitulo}</p>
        <SinTacc />
        <ul className="producto-card__sabores" id={listaId} aria-label={`Sabores de ${linea.nombre}`}>
          {sabores.map((sabor) => (
            <li key={sabor} className="producto-card__chip">
              {sabor}
            </li>
          ))}
        </ul>
        {hayMas && (
          <button
            type="button"
            className="producto-card__toggle"
            aria-expanded={expandido}
            aria-controls={listaId}
            onClick={() => setExpandido((v) => !v)}
          >
            {expandido ? 'Ver menos sabores' : `Ver todos los sabores (${linea.sabores.length})`}
          </button>
        )}
        {linea.links.map((link) => (
          <a
            key={link.label}
            className="producto-card__btn"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            <span className="visually-hidden"> (se abre en una pestaña nueva)</span>
          </a>
        ))}
      </div>
    </article>
  );
}

type Item = { tipo: 'producto'; data: Producto } | { tipo: 'linea'; data: Linea };

export default function Products() {
  const [categoria, setCategoria] = useState<CategoriaId>('premezclas');
  const [subcategoria, setSubcategoria] = useState<SubcategoriaId | 'todas'>('todas');

  const categoriaActual = categorias.find((c) => c.id === categoria)!;

  const items = useMemo<Item[]>(() => {
    const prods: Item[] = productos
      .filter(
        (p) =>
          p.activo &&
          p.categoria === categoria &&
          (subcategoria === 'todas' || p.subcategoria === subcategoria),
      )
      .map((p) => ({ tipo: 'producto', data: p }));
    const lins: Item[] = lineas
      .filter((l) => l.categoria === categoria)
      .map((l) => ({ tipo: 'linea', data: l }));
    return [...lins, ...prods];
  }, [categoria, subcategoria]);

  const cambiarCategoria = (id: CategoriaId) => {
    setCategoria(id);
    setSubcategoria('todas');
  };

  return (
    <section id="productos" className="productos-section" aria-labelledby="productos-title">
      <div className="productos-container">
        <h2 id="productos-title" className="productos-title">
          Productos
        </h2>
        <p className="productos-intro">
          100% Sin TACC · Planta libre de gluten · FSSC 22000 · Fáciles de preparar. Comprar en Mercado
          Libre.
        </p>

        <div className="productos-filtros" role="group" aria-label="Categorías">
          {categorias.map((c) => (
            <button
              key={c.id}
              type="button"
              className="productos-filtro"
              aria-pressed={categoria === c.id}
              onClick={() => cambiarCategoria(c.id)}
            >
              {c.nombre}
            </button>
          ))}
        </div>

        {categoriaActual.subcategorias.length > 0 && (
          <div
            className="productos-filtros productos-filtros--sub"
            role="group"
            aria-label={`Subcategorías de ${categoriaActual.nombre}`}
          >
            <button
              type="button"
              className="productos-filtro"
              aria-pressed={subcategoria === 'todas'}
              onClick={() => setSubcategoria('todas')}
            >
              Todas
            </button>
            {categoriaActual.subcategorias.map((s) => (
              <button
                key={s.id}
                type="button"
                className="productos-filtro"
                aria-pressed={subcategoria === s.id}
                onClick={() => setSubcategoria(s.id)}
              >
                {s.nombre}
              </button>
            ))}
          </div>
        )}

        <p className="productos-resultados" aria-live="polite">
          {items.length === 1 ? '1 resultado' : `${items.length} resultados`}
        </p>

        <ul className="productos-grid">
          {items.map((item) => (
            <li key={`${item.tipo}-${item.data.id}`} className="productos-grid__item">
              {item.tipo === 'producto' ? (
                <ProductCard producto={item.data} />
              ) : (
                <LineCard linea={item.data} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
