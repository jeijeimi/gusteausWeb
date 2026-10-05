'use client';

import { useMemo, useState } from 'react';
import ProductDetail from '@/components/ProductDetail';
import ProductShelf from '@/components/ProductShelf';
import {
  categorias,
  lineas,
  nombreDe,
  productos,
  type CategoriaId,
  type Estante,
  type Producto,
  type SubId,
} from '@/data/products';
import { usePerRow } from '@/hooks/usePerRow';

const ESTANTES: Estante[] = ['a', 'b', 'c'];

/** Divide en filas de a lo sumo perRow, repartiendo lo más parejo posible (7/3 → 3,2,2). */
function dividir<T>(items: T[], perRow: number): T[][] {
  if (items.length === 0) return [];
  const filas = Math.ceil(items.length / perRow);
  const base = Math.floor(items.length / filas);
  const resto = items.length % filas;
  const out: T[][] = [];
  let i = 0;
  for (let f = 0; f < filas; f++) {
    const n = base + (f < resto ? 1 : 0);
    out.push(items.slice(i, i + n));
    i += n;
  }
  return out;
}

export default function Products() {
  const [cat, setCat] = useState<CategoriaId>('premezclas');
  const [sub, setSub] = useState<SubId | null>(null);
  const [sel, setSel] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const perRow = usePerRow();

  const categoria = categorias.find((c) => c.id === cat)!;
  const linea = lineas.find((l) => l.categoria === cat);
  const seleccionado = sel ? productos.find((p) => p.id === sel) : undefined;

  const grupos = useMemo<Producto[][]>(() => {
    const deCategoria = productos.filter((p) => p.categoria === cat);
    if (seleccionado) {
      return [deCategoria.filter((p) => p.sub === seleccionado.sub && p.id !== seleccionado.id)];
    }
    const filtrados = sub ? deCategoria.filter((p) => p.sub === sub) : deCategoria;
    return ESTANTES.map((e) => filtrados.filter((p) => p.estante === e)).filter((g) => g.length > 0);
  }, [cat, sub, seleccionado]);

  const cambiarCategoria = (id: CategoriaId) => {
    setCat(id);
    setSub(null);
    setSel(null);
    setShowAll(false);
  };

  const cambiarSub = (id: SubId) => {
    setSub((actual) => (actual === id ? null : id));
    setSel(null);
  };

  const seleccionar = (id: string) => {
    const producto = productos.find((p) => p.id === id);
    if (!producto) return;
    setSel(id);
    setSub(producto.sub);
  };

  const cantidad = grupos.reduce((total, g) => total + g.length, 0);
  const anuncio = linea
    ? nombreDe(linea)
    : seleccionado
      ? nombreDe(seleccionado)
      : `${cantidad} ${cantidad === 1 ? 'producto' : 'productos'}`;

  return (
    <section id="productos" className="productos-section" aria-labelledby="productos-title">
      <div className="productos-panel">
        <div className="productos-inner">
          <p className="productos-kicker">Sabor Profesional</p>
          <h2 id="productos-title" className="productos-title">
            Nuestros Productos
          </h2>
          <span className="productos-linea" aria-hidden="true" />

          <div className="productos-pills" role="group" aria-label="Categorías">
            {categorias.map((c) => (
              <button
                key={c.id}
                type="button"
                className="productos-pill"
                aria-pressed={cat === c.id}
                onClick={() => cambiarCategoria(c.id)}
              >
                {c.nombre}
              </button>
            ))}
          </div>

          {categoria.subcategorias.length > 0 && (
            <div
              className="productos-pills productos-pills--sub"
              role="group"
              aria-label={`Subcategorías de ${categoria.nombre}`}
            >
              {categoria.subcategorias.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className="productos-pill productos-pill--sub"
                  aria-pressed={sub === s.id}
                  onClick={() => cambiarSub(s.id)}
                >
                  {s.nombre}
                </button>
              ))}
            </div>
          )}

          <p className="productos-sr" aria-live="polite">
            {anuncio}
          </p>

          {linea ? (
            <ProductDetail
              key={linea.id}
              tipo="linea"
              item={linea}
              showAll={showAll}
              onToggleSabores={() => setShowAll((v) => !v)}
            />
          ) : (
            <>
              {seleccionado && (
                <ProductDetail
                  key={seleccionado.id}
                  tipo="producto"
                  item={seleccionado}
                  onClose={() => setSel(null)}
                />
              )}
              <div className="productos-estantes">
                {grupos.flatMap((grupo, g) =>
                  dividir(grupo, perRow).map((fila, f) => (
                    <ProductShelf
                      key={`${cat}-${sub ?? 'todas'}-${sel ?? ''}-${g}-${f}`}
                      items={fila}
                      perRow={perRow}
                      onSelect={seleccionar}
                    />
                  )),
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
