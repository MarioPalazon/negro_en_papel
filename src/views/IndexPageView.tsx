import { Link } from "react-router-dom"
import WhatsAppIcon from "../components/Whatsapp/WhatsAppIcon"
import WhatsAppButton from "../components/Whatsapp/WhatsAppButton"

const IndexPageView = () => {

  return (
    <div>
      <section className="w-full flex justify-center">
        <article className="w-[90%] md:w-[80%] flex flex-col md:flex-row my-14 lg:w-[70%]">
          {/* Texto */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-between">
            <div className="w-[90%] flex flex-col items-start justify-center">
              <h1 className="text-2xl md:text-3xl mb-4 font-light">Negro en Papel</h1>
              <p className="font-medium md:text-base mb-2">Bienvenidos a un espacio en donde tu mascota es la protagonista</p>
              <p className="font-light md:text-base">
              Cada mascota tiene una historia única, una mirada inolvidable y un gesto que dice más que mil palabras. A través del grafito, busco transformar esos momentos en retratos hechos a mano, intentando captar emoción, detalle y amor.
              En cada retrato se busca inmortalizar a ese compañero que llena tu vida de ternura, lealtad y alegría.
              </p>
              <p className="font-light italic md:text-base mt-2">Tu mascota, en blanco y negro, pero con el corazón lleno de color.</p>
            </div>
          </div>
          {/* Imágenes */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <div className="w-[90%]">
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center justify-start gap-3">
                <img className="w-[60%] h-auto" src="/img/intro-1top.jpeg" alt="" />
                <img className="w-[40%] h-auto" src="/img/intro-2top.jpeg" alt="" />
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex items-center justify-end gap-3 mt-3">
                <img className="w-[40%] h-auto" src="/img/intro-1bottom.jpeg" alt="" />
                <img className="w-[60%] h-auto" src="/img/intro-2bottom.jpeg" alt="" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="trabajosId" className="w-full flex flex-col items-center justify-center bg-[#1E1E1E]">
        <h2 className="text-white my-5 text-3xl font-light">Mis Trabajos</h2>
        <article className="w-full md:w-[90%] lg:w-[70%] flex justify-center py-14">

          <div className="w-[80%] lg:w-[100%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-5 gap-4 ">
            <div data-aos="fade-right" data-aos-duration="3000" className="row-span-2 flex items-end">
              <img src="/imgTrabajos/img1.jpeg" alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" className="row-span-2 flex items-end">
              <img src="/imgTrabajos/img2.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="row-span-3 flex items-end">
              <img src="/imgTrabajos/img3.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="row-span-3">
              <img src="/imgTrabajos/img4.jpeg" alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" className="row-span-3">
              <img src="/imgTrabajos/img5.jpeg" alt="" />
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" className="row-span-3">
              <img src="/imgTrabajos/img6.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="row-span-2 flex items-start">
              <img src="/imgTrabajos/img7.jpeg" alt="" />
            </div>
            <div data-aos="fade-left" data-aos-duration="3000" className="row-span-2 flex items-start">
              <img src="/imgTrabajos/img8.jpeg" alt="" />
            </div>
          </div>
        </article>

        <Link to="https://www.instagram.com/negro_enpapel/" target="_blank" rel="noopener noreferrer" className="text-white mb-7 text-1xl font-light flex items-center">
          <img className="w-[20%] me-1" src="/img/icon-instagram-color.png" alt="" />
        @negro_enPapel
        </Link>
      </section>

    

      <section id="informacionId" className="w-full flex justify-center py-6">
        <article className="w-[80%] flex flex-col md:flex-row my-7">
          <div className="w-full md:w-[60%] flex flex-col lg:flex-row justify-end items-center">
            <h2 className="w-full md:w-[80%] lg:w-[30%] my-5 text-2xl md:text-3xl font-light">Información</h2>
            <div className="w-full md:w-[80%] lg:w-[60%] md:text-base">
              <p className="mb-6 font-light">
              Para que el retrato logre reflejar la esencia y los detalles de tu mascota, es fundamental contar con una  buena fotografía. <span className="mt-6 mb-2 font-medium">Idealmente debe cumplir con lo siguiente:</span>
              </p>
              <ul className="font-light ml-5">
                <li>Retrato en primer plano.</li>
                <li>Buena iluminación, sin sombras o luces extremas.</li>
                <li>Calidad y nitidez.</li>
                <li>Sin filtros o efectos.</li>
              </ul>
              <p className="mt-6 mb-2 font-medium">
                Disponible en dos tamaños:
              </p>
              <ul className="font-light list-disc ml-5">
                <li>Tamaño A3 (21 x 29,7cm) - Para 1 o 2 mascotas.</li>
                <li>Tamaño A4 (29,7 x 42cm) - Para 2 o más mascotas.</li>
              </ul>
              <p className="mt-6 mb-2 font-medium">
                ¿Cual es el resultado?
              </p>
              <ul className="font-light list-disc ml-5">
                <li>Retrato de carita/medio cuerpo de la mascota.</li>
                <li>Hoja de 160g.</li>
                <li>Retrato con fijador para mayor duración.</li>
                <li>Incluye marco de madera y vidrio.</li>
              </ul>
              <div className="w-full flex justify-center mt-10">
                <WhatsAppButton />
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] flex justify-center items-center mt-6 md:mt-0">
            <img className="w-[90%] md:w-[100%] lg:w-[70%] lg:h-[65vh]" src="/imgTrabajos/img-informacion.png" alt="" />
          </div>
        </article>
      </section>

      <section className="w-full flex justify-center">
    <article id="contactoId" className="w-[90%] md:w-[80%] lg:w-[40%] flex flex-col justify-center items-center my-14 border-t border-black">
      <h2 className="my-10 text-2xl md:text-3xl font-light">Contacto</h2>
      <div className="w-[90%] md:w-[80%] bg-[#1E1E1E] flex flex-col items-center py-6 rounded-2xl">
        <h3 className="text-white font-light mb-4">Camila Ortiz Borquez</h3>
        <p className="text-white font-light">negro.enpapel@gmail.com</p>
        <div className="w-[60%] md:w-[30%] flex justify-around items-center my-6">
          
          <Link to="https://www.instagram.com/negro_enpapel/" target="_blank" rel="noopener noreferrer">
            <img className="w-[70%]" src="/img/icon-instagram-color.png" alt="Instagram" />
          </Link>

          <WhatsAppIcon />

        </div>
      </div>
    </article>
  </section>
    </div>
  )
}

export default IndexPageView
