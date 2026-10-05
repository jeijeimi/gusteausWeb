'use client';

export default function Hero() {
  return (
    <section id="home" className="home-section">
      <div className="video-background">
        <video autoPlay muted loop playsInline className="video">
          <source src="/assets/video/VideoPaginaWeb.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container home-content">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            <h1 className="home-title">
              <span className="home-title-baskerville">Somos fabricantes de</span>{' '}
              <span className="home-title-rochester">sabores.</span>
            </h1>
            <p className="home-subtitle">
              Más de 15 años desarrollando sabores y creando nuevas formas de disfrutar la pastelería.
            </p>
            <a href="#productos" className="btn btn-primary home-button">
              Ver nuestros productos →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
