import { Link, Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <header className="w-full flex items-center flex-col bg-black">
        <div className="w-[80%] flex flex-col md:flex-row md:justify-between lg:w-[70%]">

          <div className=" w-full md:w-[30%] flex flex-col md:justify-center mt-3 lg:flex">
            <h4 className="text-white text-[15px] font-light flex justify-center items-center md:justify-start md:mb-3">
              <img className="w-[7%] me-2" src="/img/icon-ubicacion.png" alt="" />
              Santiago, Chile
              </h4>
            <p className="text-white text-[15px] font-light flex justify-center items-center md:justify-start">
              <img className="w-[7%] me-2" src="/img/icon-box.png" alt="" />
              Envio a Regiones
            </p>
          </div>

          <div className="w-full md:w-[30%] py-5">
            <Link className="w-full flex justify-center md:justify-center" to="/">
              <img className="w-[50%] md:w-[80%] lg:w-[50%]" src="/img/logo-negro-en-papel.jpeg" alt="" />
            </Link>
          </div>

          <div className="w-full mb-4 flex justify-center md:w-[30%] md:justify-end md:items-center">
            <Link className="flex justify-center" to="https://www.instagram.com/negro_enpapel/">
              <img className="w-[50%]" src="/img/icon-instagram.png" alt="" />
            </Link>
            <Link className="flex justify-center" to="">
              <img className="w-[50%]" src="/img/icon-whatsapp.png" alt="" />
            </Link>
          </div>
        </div>
        
        <div className="w-full flex justify-center bg-[#1E1E1E]">
          <nav className="w-full md:w-[40%]">
            <ul className="flex justify-around text-white py-3">
              <li className="font-light">
                <a href="/#trabajosId">Trabajos</a>
              </li>
              <li className="font-light">
                <a href="/#informacionId">Información</a>
              </li>
              <li className="font-light">
                <a href="/#contactoId">Contacto</a>
              </li>
              <li className="font-light">
                <Link to="/galeria">Galeria</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

        <Outlet />

      <footer className="w-full bg-[#1E1E1E] py-6">
          <p className="text-white text-center">Este es el footer</p>
      </footer>
      
    </div>
  )
}

export default AppLayout
