export type CategoriaId = 'premezclas' | 'esencias' | 'emulsiones' | 'otros';

export type SubcategoriaId =
  | 'cake-mix'
  | 'mug-cake-mix'
  | 'postres'
  | 'flanes'
  | 'lusters'
  | 'ingredientes';

export interface Subcategoria {
  id: SubcategoriaId;
  nombre: string;
}

export interface Categoria {
  id: CategoriaId;
  nombre: string;
  subcategorias: Subcategoria[];
}

export interface Producto {
  id: string;
  nombre: string;
  subtitulo: string;
  imagen: string;
  categoria: CategoriaId;
  subcategoria: SubcategoriaId;
  link: string;
  activo: boolean;
}

export interface LinkCompra {
  label: string;
  url: string;
}

export interface Linea {
  id: string;
  nombre: string;
  subtitulo: string;
  imagenes: string[];
  categoria: CategoriaId;
  sabores: string[];
  links: LinkCompra[];
}

export const categorias: Categoria[] = [
  {
    id: 'premezclas',
    nombre: 'Premezclas',
    subcategorias: [
      { id: 'cake-mix', nombre: 'Cake mix' },
      { id: 'mug-cake-mix', nombre: 'Mug cake mix' },
      { id: 'postres', nombre: 'Postres' },
      { id: 'flanes', nombre: 'Flanes' },
    ],
  },
  { id: 'esencias', nombre: 'Esencias', subcategorias: [] },
  { id: 'emulsiones', nombre: 'Emulsiones', subcategorias: [] },
  {
    id: 'otros',
    nombre: 'Otros',
    subcategorias: [
      { id: 'lusters', nombre: 'Lusters' },
      { id: 'ingredientes', nombre: 'Ingredientes y complementos' },
    ],
  },
];

const imagenDe = (id: string) => `/images/productos/${id}.webp`;
const slug = (texto: string) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

// TODO: reemplazar "#" por los links reales de Mercado Libre
const LINK_PENDIENTE = '#';

interface Definicion {
  nombre: string;
  subtitulo?: string;
  activo?: boolean;
}

function crearProductos(
  categoria: CategoriaId,
  subcategoria: SubcategoriaId,
  prefijo: string,
  subtituloBase: string,
  items: Definicion[],
): Producto[] {
  return items.map(({ nombre, subtitulo, activo = true }) => {
    const id = `${subcategoria}-${slug(nombre)}`;
    return {
      id,
      nombre: `${prefijo} ${nombre}`.trim(),
      subtitulo: subtitulo ?? subtituloBase,
      imagen: imagenDe(id),
      categoria,
      subcategoria,
      link: LINK_PENDIENTE, // TODO: link de Mercado Libre
      activo,
    };
  });
}

const SOLO_LECHE = 'Solo agregá leche';

export const productos: Producto[] = [
  ...crearProductos('premezclas', 'cake-mix', 'Cake mix', SOLO_LECHE, [
    { nombre: 'Chocolate' },
    { nombre: 'Vainilla' },
    { nombre: 'Red velvet' },
    { nombre: 'Limón' },
    { nombre: 'Coco' },
    { nombre: 'Naranja' },
    { nombre: 'Mundial', activo: false }, // De temporada
  ]),
  ...crearProductos('premezclas', 'mug-cake-mix', 'Mug cake mix', SOLO_LECHE, [
    { nombre: 'Chocolate' },
    { nombre: 'Vainilla' },
    { nombre: 'Red velvet' },
    { nombre: 'Limón' },
    { nombre: 'Banana' },
    { nombre: 'Mundial', activo: false }, // De temporada
  ]),
  ...crearProductos('premezclas', 'postres', 'Postre', SOLO_LECHE, [
    { nombre: 'Vainilla' },
    { nombre: 'Chocolate' },
  ]),
  ...crearProductos('premezclas', 'flanes', 'Flan', SOLO_LECHE, [
    { nombre: 'Vainilla' },
    { nombre: 'Dulce de leche' },
  ]),
  // TODO: nombres reales de los colores
  ...crearProductos(
    'otros',
    'lusters',
    'Luster',
    'TODO',
    Array.from({ length: 6 }, (_, i) => ({ nombre: `Color ${i + 1}` })),
  ),
  ...crearProductos('otros', 'ingredientes', '', 'TODO', [
    { nombre: 'Mousse de chocolate' },
    { nombre: 'Crema chantilly' },
    { nombre: 'Merengue', subtitulo: 'Solo agregá agua' },
    { nombre: 'Azúcar masabo vainillada' },
  ]),
];

const SUBTITULO_LINEA = 'Elegí tu sabor al comprar';
// TODO: nombres reales de los sabores
const saboresPlaceholder = (n: number) => Array.from({ length: n }, (_, i) => `Sabor ${i + 1}`);

export const lineas: Linea[] = [
  {
    id: 'esencias',
    nombre: 'Esencias',
    subtitulo: SUBTITULO_LINEA,
    imagenes: [imagenDe('esencias')],
    categoria: 'esencias',
    sabores: saboresPlaceholder(10),
    links: [{ label: 'Comprar en Mercado Libre', url: LINK_PENDIENTE }], // TODO: link real
  },
  {
    id: 'emulsiones',
    nombre: 'Emulsiones',
    subtitulo: SUBTITULO_LINEA,
    imagenes: [imagenDe('emulsiones')],
    categoria: 'emulsiones',
    sabores: saboresPlaceholder(30),
    links: [{ label: 'Comprar en Mercado Libre', url: LINK_PENDIENTE }], // TODO: link real
  },
];
