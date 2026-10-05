'use client';

export default function Gallery() {
  return (
    <section id="galeria" className="galeria-section">
      <div className="container">
        {/* Centered Title */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="section-title">
              <span className="title-script">Donde estuvimos</span>
              <span className="title-serif">Exposiciones y Eventos</span>
              <div className="title-underline"></div>
            </h2>
          </div>
          <div className="galeria-container">
            <div className="galeria-item">
              <img src="/assets/img/nosotrosExpo/soflo.png" alt="soflo" />
              <p>
                En 2023, Gusteau’s Professional Kitchen participó de la Soflo Cake & Candy Expo, en Estados Unidos, llevando nuestros sabores argentinos a nuevos mercados, presentando nuestros productos y generando vínculos que acompañan nuestro crecimiento internacional.
              </p>
            </div>
            <div className="galeria-item">
              <img src="/assets/img/nosotrosExpo/expoceliaca.png" alt="expoceliaca" />
              <p>
                En 2026, Gusteau’s participó de ExpoCelíaca con un stand de gran impacto visual, degustaciones de la mano de una pastelera y un set fotográfico para interactuar con el público. Fueron dos jornadas para acercarnos a nuestra comunidad, conocerla y fortalecer la presencia de la marca.
              </p>
            </div>
            <div className="galeria-item">
              <img src="/assets/img/nosotrosExpo/marcaspropias.png" alt="marcaspropias" />
              <p>
                Gusteau’s participó de Marcas Propias Latam Fórum, donde presentamos nuestros productos a empresas y supermercados, participamos de rondas de negocios y generamos nuevas oportunidades comerciales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}