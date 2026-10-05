'use client';

export default function About() {
  return (
    <section id="quienes-somos" className="quienes-somos-section">
      <div className="container">
        {/* Centered Title */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="section-title">
              <span className="title-script">Nuestra esencia</span>
              <span className="title-serif">Historia y Origen</span>
              <div className="title-underline"></div>
            </h2>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left Column - Image */}
          <div className="col-lg-6 col-md-12 position-relative">
            <div className="image-container">
              {/* Decorative circles */}
              
              {/* Main image */}
              <img
                src="/assets/img/nosotrosExpo/maskNosotros.png"
                alt="Nuestro equipo"
                className="main-image"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 col-md-12">
            <div className="content-container">
              {/* Quote */}
              <blockquote className="quote">
                <div className="quote-line"></div>
                <p className="quote-text">
                  Hacer que crear algo rico y extraordinario sea posible para todos, combinando sabor, innovación y practicidad es nuestra inspiración.
                </p>
              </blockquote>

              {/* Body text */}
              <div className="body-text">
                <p>
                  <strong className="highlight-text">Gusteau's Professional Kitchen</strong> nació con la visión de revolucionar la pastelería, fusionando la tradición artesanal con la innovación moderna.
                </p>
                <p>
                  Desde nuestros inicios, nos hemos dedicado a desarrollar productos de alta calidad que faciliten el trabajo de los profesionales y entusiastas de la repostería, sin sacrificar el sabor ni la presentación.
                </p>
                <p>
                  Nuestro compromiso es ofrecer soluciones creativas que permitan a cada persona expresar su arte culinario, brindando herramientas e ingredientes que inspiren y sorprendan en cada creación.
                </p>
              </div>

              {/* Decorative hearts */}
              <div className="hearts-container">
                <img
                  src="/assets/img/recursos/corazones.svg"
                  alt="Corazones decorativos"
                  className="hearts"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
