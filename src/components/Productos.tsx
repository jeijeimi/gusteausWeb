'use client';

export default function Productos() {
  return (
    <section id="productos" className="productos-section">
      <div className="container">
        {/* Centered Title */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="section-title">
              <span className="title-script">Sabor Profesional</span>
              <span className="title-serif">Nuestros Productos</span>
              <p>Seleccioná una categoría para explorar nuestra variedad de productos.</p>
              <div className="title-underline"></div>
            </h2>
          </div>

        <div className="arcoBlanco">
        </div>

          <div className="productos-container">
            <div className="productos-item">
              <img src="/assets/img/productos/CakeMixChoco.png" alt="Misión" />
              <div>
                <h3>MISIÓN</h3>
                <p>
                  Desarrollar productos de repostería que combinen calidad, practicidad e innovación, facilitando la elaboración de preparaciones ricas y accesibles para hogares y profesionales, sin resignar sabor.
                </p>
              </div>
            </div>
            <div className="productos-item">
              <img src="/assets/img/productos/CakeMixLimon.png" alt="Visión" />
              <h3>VISIÓN</h3>
              <p>
                Ser una marca referente en repostería, reconocida por la calidad, innovación y variedad de sus productos, con presencia local e internacional y una propuesta cercana que combine calidad, practicidad y sabor.
              </p>
            </div>
            <div className="productos-item">
              <img src="/assets/img/productos/CakeMixVainilla.png" alt="Valores" />
              <h3>PROPÓSITO</h3>
              <p>
                Acercar la pastelería de calidad a todos, desarrollando soluciones que hagan de cada preparación una experiencia simple, rica y accesible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}