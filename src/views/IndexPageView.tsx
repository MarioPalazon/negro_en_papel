import { Link } from "react-router-dom"

const IndexPageView = () => {
  return (
    <div>
      <section className="w-full flex justify-center">
        <article className="w-[90%] md:w-[80%] flex flex-col md:flex-row my-14">
          {/* Texto */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[80%] md:w-[70%] flex flex-col items-start justify-center">
              <h1 className="text-2xl md:text-3xl mb-4 font-light">Negro en Papel</h1>
              <p className="font-light md:text-base">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, suscipit ac curabitur condimentum luctus gravida himenaeos, proin purus turpis quis dui scelerisque urna. Iaculis primis sed magna mauris torquent dictumst metus tellus curae
              </p>
            </div>
          </div>
          {/* Imágenes */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <div className="w-[80%]">
              <div className="flex items-center justify-start gap-3">
                <img className="w-[60%] h-auto" src="/img/intro-1top.jpeg" alt="" />
                <img className="w-[40%] h-auto" src="/img/intro-2top.jpeg" alt="" />
              </div>
              <div className="flex items-center justify-end gap-3 mt-3">
                <img className="w-[40%] h-auto" src="/img/intro-1bottom.jpeg" alt="" />
                <img className="w-[60%] h-auto" src="/img/intro-2bottom.jpeg" alt="" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="trabajosId" className="w-full flex flex-col items-center justify-center bg-[#1E1E1E]">
        <h2 className="text-white my-5 text-3xl font-light">Mis Trabajos</h2>
        <article className="w-full md:w-[80%] flex justify-center py-14">

          <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-5 gap-4 ">
            <div className="row-span-2 flex items-end">
              <img src="/imgs/img1.jpeg" alt="" />
            </div>
            <div className="row-span-2 flex items-end">
              <img src="/imgs/img2.jpeg" alt="" />
            </div>
            <div className="row-span-3 flex items-end">
              <img src="/imgs/img3.jpeg" alt="" />
            </div>
            <div className="row-span-3">
              <img src="/imgs/img4.jpeg" alt="" />
            </div>
            <div className="row-span-3">
              <img src="/imgs/img5.jpeg" alt="" />
            </div>
            <div className="row-span-3">
              <img src="/imgs/img6.jpeg" alt="" />
            </div>
            <div className="row-span-2 flex items-start">
              <img src="/imgs/img7.jpeg" alt="" />
            </div>
            <div className="row-span-2 flex items-start">
              <img src="/imgs/img8.jpeg" alt="" />
            </div>
          </div>
        </article>

        <h3 className="text-white mb-7 text-1xl font-light">@negro_enPapel</h3>
      </section>

    

      <section id="informacionId" className="w-full flex justify-center py-6">
        <article className="w-[80%] flex flex-col md:flex-row my-7">
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between items-center">
            <h2 className="w-full md:w-[20%] my-5 text-2xl md:text-3xl font-light">Información</h2>
            <div className="w-full md:w-[60%] md:text-base">
              <p className="mb-6 font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sociis, suscipit ac curabitur condimentum luctus gravida himenaeos, proin purus turpis quis dui scelerisque urna. Iaculis primis sed magna mauris torquent dictumst metus tellus curae.
              </p>
              <ul className="font-light list-disc ml-5">
                <li>Convallis augue mattis habitasse.</li>
                <li>Convallis augue mattis.</li>
                <li>Condimentum lobortis ligula nisi.</li>
                <li>Volutpat semper suscipit justo viverra.</li>
              </ul>
              <div className="w-full flex justify-center mt-10">
                <button className="w-[60%] md:w-[50%] bg-[#1E1E1E] text-white rounded-2xl py-2">
                  Cotizar
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img className="w-[80%] md:w-[70%]" src="/imgs/img-informacion.png" alt="" />
          </div>
        </article>
      </section>

      <section className="w-full flex justify-center">
    <article id="contactoId" className="w-[90%] md:w-[80%] flex flex-col justify-center items-center my-14 border-t border-black">
      <h2 className="my-10 text-2xl md:text-3xl font-light">Contacto</h2>
      <div className="w-[90%] md:w-[40%] bg-[#1E1E1E] flex flex-col items-center py-6 rounded-2xl">
        <h3 className="text-white font-light mb-4">Camila Ortiz Borquez</h3>
        <p className="text-white font-light">+56 9 440 42 334</p>
        <p className="text-white font-light">micorreo@gmail.com</p>
        <div className="w-[60%] flex justify-around items-center my-6">
          <Link to="">
            <img className="w-10 md:w-8" src="/img/icon-instagram.png" alt="" />
          </Link>
          <Link to="">
            <img className="w-10 md:w-8" src="/img/icon-whatsapp.png" alt="" />
          </Link>
        </div>
      </div>
    </article>
  </section>
    </div>
  )
}

export default IndexPageView
