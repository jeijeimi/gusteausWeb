export type CategoriaId = 'premezclas' | 'esencias' | 'emulsiones' | 'otros';
export type SubId = 'cake-mix' | 'mug' | 'flanes' | 'postres' | 'lusters' | 'ingredientes';
export type Estante = 'a' | 'b' | 'c';

export interface Subcategoria {
  id: SubId;
  nombre: string;
}

export interface Categoria {
  id: CategoriaId;
  nombre: string;
  subcategorias: Subcategoria[];
}

/** Datos mínimos para dibujar un envase (imagen o placeholder). */
export interface Envase {
  id: string;
  l1: string;
  l2: string;
  imagen?: string;
  bg: string;
  ink: string;
}

export interface Producto extends Envase {
  categoria: CategoriaId;
  sub: SubId;
  estante: Estante;
  descripcion: string;
  extra: string;
  link: string;
}

export interface Linea extends Envase {
  categoria: CategoriaId;
  descripcion: string;
  sabores: string[];
  link: string;
}

export const categorias: Categoria[] = [
  {
    id: 'premezclas',
    nombre: 'Premezclas',
    subcategorias: [
      { id: 'cake-mix', nombre: 'Bizcochuelos' },
      { id: 'mug', nombre: 'Torta en Taza' },
      { id: 'flanes', nombre: 'Flanes' },
      { id: 'postres', nombre: 'Postres' },
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

export const nombreDe = (e: Envase) => `${e.l1} ${e.l2}`.trim();

// Cuando exista public/images/productos/{id}.webp, agregar `imagen: rutaImagen(id)` al producto.
export const rutaImagen = (id: string) => `/images/productos/${id}.webp`;

const LINK = '#'; // TODO: links reales de Mercadolibre
const SOLO_LECHE = 'Solo\nagregá\nleche';
const SOLO_AGUA = 'Solo\nagregá\nagua';
const DESCRIPCION_CORTA = '[Descripción corta]'; // TODO: descripción real

const colores: Record<string, [bg: string, ink: string]> = {
  Chocolate: ['#5B3A2D', '#fff'],
  Vainilla: ['#EBCB8B', '#4A3200'],
  Limón: ['#F2D338', '#4A3F00'],
  Naranja: ['#F08A24', '#3A1D00'],
  'Red velvet': ['#B3202F', '#fff'],
  Coco: ['#E9E4DA', '#3F3A30'],
  Mundial: ['#4B9BC9', '#fff'],
  Banana: ['#F4DB6A', '#4A3F00'],
  'Dulce de leche': ['#C98A4B', '#3A1F00'],
};

const slug = (texto: string) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

interface Grupo {
  categoria: CategoriaId;
  sub: SubId;
  estante: Estante;
  l1: string;
  extra: string;
  descripcion: (l2: string) => string;
}

interface ItemGrupo {
  l2: string;
  bg?: string;
  ink?: string;
  extra?: string;
}

function crear(grupo: Grupo, items: ItemGrupo[]): Producto[] {
  const { descripcion, ...base } = grupo;
  return items.map(({ l2, bg, ink, extra }) => {
    const [bgBase, inkBase] = colores[l2] ?? ['#FBF1EC', '#7A0A33'];
    return {
      ...base,
      id: `${grupo.sub}-${slug(l2)}`,
      l2,
      descripcion: descripcion(l2),
      extra: extra ?? grupo.extra,
      link: LINK, // TODO: link real
      bg: bg ?? bgBase,
      ink: ink ?? inkBase,
    };
  });
}

const sabores = (...l2: string[]): ItemGrupo[] => l2.map((s) => ({ l2: s }));

export const productos: Producto[] = [
  ...crear(
    {
      categoria: 'premezclas',
      sub: 'cake-mix',
      estante: 'a',
      l1: 'Cake mix',
      extra: SOLO_LECHE,
      descripcion: (s) => `Polvo para preparar Bizcochuelo Horno sabor ${s} 420gr.`,
    },
    sabores('Chocolate', 'Vainilla', 'Limón', 'Naranja', 'Red velvet', 'Coco', 'Mundial'),
  ),
  ...crear(
    {
      categoria: 'premezclas',
      sub: 'mug',
      estante: 'b',
      l1: 'Mug cake',
      extra: SOLO_LECHE,
      descripcion: (s) => `Polvo para preparar torta en taza sabor ${s}.`,
    },
    sabores('Vainilla', 'Chocolate', 'Red velvet', 'Limón', 'Banana', 'Mundial'),
  ),
  ...crear(
    {
      categoria: 'premezclas',
      sub: 'flanes',
      estante: 'c',
      l1: 'Flan',
      extra: SOLO_LECHE,
      descripcion: (s) => `Polvo para preparar flan sabor ${s}.`,
    },
    sabores('Vainilla', 'Dulce de leche'),
  ),
  ...crear(
    {
      categoria: 'premezclas',
      sub: 'postres',
      estante: 'c',
      l1: 'Postre',
      extra: SOLO_LECHE,
      descripcion: (s) => `Polvo para preparar postre sabor ${s}.`,
    },
    sabores('Chocolate', 'Vainilla'),
  ),
  ...crear(
    {
      categoria: 'otros',
      sub: 'lusters',
      estante: 'a',
      l1: 'Luster',
      extra: '',
      descripcion: () => DESCRIPCION_CORTA, // TODO: descripción real
    },
    // TODO: nombres reales de los colores
    ['#E58DB0', '#C9A24B', '#B8BCC4', '#4FA5A0', '#C0392B', '#3F6FB5'].map((bg, i) => ({
      l2: `[color ${i + 1}]`,
      bg,
      ink: '#fff',
    })),
  ),
  ...crear(
    {
      categoria: 'otros',
      sub: 'ingredientes',
      estante: 'b',
      l1: '',
      extra: SOLO_LECHE,
      descripcion: () => DESCRIPCION_CORTA, // TODO: descripción real
    },
    [
      { l2: 'Mousse de chocolate', bg: '#5B3A2D', ink: '#fff' },
      { l2: 'Crema chantilly', bg: '#FBF1EC', ink: '#7A0A33' },
      { l2: 'Merengue', bg: '#FFFFFF', ink: '#7A0A33', extra: SOLO_AGUA },
      { l2: 'Azúcar masabo vainillada', bg: '#EBCB8B', ink: '#4A3200' },
    ],
  ),
];

const DESCRIPCION_LINEA = 'Elegí tu sabor al finalizar la compra en Mercadolibre.';
// TODO: sabores reales
const saboresPlaceholder = (n: number) => Array.from({ length: n }, (_, i) => `Sabor ${i + 1}`);

export const lineas: Linea[] = [
  {
    id: 'esencias',
    categoria: 'esencias',
    l1: 'Línea',
    l2: 'Esencias',
    descripcion: DESCRIPCION_LINEA,
    sabores: saboresPlaceholder(10),
    link: LINK, // TODO: link real
    bg: '#F2A0BA',
    ink: '#5E0726',
  },
  {
    id: 'emulsiones',
    categoria: 'emulsiones',
    l1: 'Línea',
    l2: 'Emulsiones',
    descripcion: DESCRIPCION_LINEA,
    sabores: saboresPlaceholder(30),
    link: LINK, // TODO: link real
    bg: '#C9A24B',
    ink: '#3A2500',
  },
];
