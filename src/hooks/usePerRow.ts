'use client';

import { useEffect, useState } from 'react';

const QUERIES: [query: string, perRow: number][] = [
  ['(min-width: 1024px)', 7],
  ['(min-width: 768px)', 5],
];

/** Productos por estante según el ancho. Arranca en 7 (igual que el SSR) y se corrige al montar. */
export function usePerRow(): number {
  const [perRow, setPerRow] = useState(7);

  useEffect(() => {
    const lists = QUERIES.map(([q]) => window.matchMedia(q));
    const update = () => {
      const i = lists.findIndex((mql) => mql.matches);
      setPerRow(i === -1 ? 3 : QUERIES[i][1]);
    };
    update();
    lists.forEach((mql) => mql.addEventListener('change', update));
    return () => lists.forEach((mql) => mql.removeEventListener('change', update));
  }, []);

  return perRow;
}
