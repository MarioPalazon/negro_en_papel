import { Link, Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <header className="w-full flex items-center flex-col bg-black">
        <div className="w-[80%] flex">
          <div className="w-[55%] flex justify-end py-5">
            <Link className="w-full flex sm:justify-start md:justify-end" to="/">
              <img className="w-[60%] md:w-[20%]" src="/img/logo-negro-en-papel.jpeg" alt="" />
            </Link>
          </div>
          <div className="w-[45%] flex justify-end items-center">
            <Link to="">
              <img className="w-[50%]" src="/img/icon-instagram.png" alt="" />
            </Link>
            <Link to="">
              <img className="w-[50%]" src="/img/icon-whatsapp.png" alt="" />
            </Link>
          </div>
        </div>
        
        <div className="w-full flex justify-center bg-[#1E1E1E]">
          <nav className="w-full md:w-[40%]">
            <ul className="flex justify-around text-white py-3">
              <li className="font-light">
                <a href="#trabajosId">Trabajos</a>
              </li>
              <li className="font-light">
                <a href="#informacionId">Información</a>
              </li>
              <li className="font-light">
                <a href="#contactoId">Contacto</a>
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
