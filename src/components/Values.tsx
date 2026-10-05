'use client';

export default function Values() {
  return (
    <section id="valores" className="valores-section">
      <div className="container">
        {/* Centered Title */}
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="section-title">
              <span className="title-script">Nuestra filosofía</span>
              <span className="title-serif">Misión, Visión y Valores</span>
              <div className="title-underline"></div>
            </h2>
          </div>
          <div className="valores-container">
            <div className="valor-item">
              <img src="/assets/img/recursos/mision.png" alt="Misión" />
              <h3>MISIÓN</h3>
              <p>
                Desarrollar productos de repostería que combinen calidad, practicidad e innovación, facilitando la elaboración de preparaciones ricas y accesibles para hogares y profesionales, sin resignar sabor.
              </p>
            </div>
            <div className="valor-item">
              <img src="/assets/img/recursos/vision.png" alt="Visión" />
              <h3>VISIÓN</h3>
              <p>
                Ser una marca referente en repostería, reconocida por la calidad, innovación y variedad de sus productos, con presencia local e internacional y una propuesta cercana que combine calidad, practicidad y sabor.
              </p>
            </div>
            <div className="valor-item">
              <img src="/assets/img/recursos/valores.png" alt="Valores" />
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