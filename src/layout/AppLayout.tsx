import { Link, Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <div>
      <header className="w-full flex items-center flex-col bg-black">
        <div className="w-[80%] flex">
          <div className="w-[55%] flex justify-end py-5">
            <img className="w-[20%]" src="/img/logo-negro-en-papel.jpeg" alt="" />
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
              <li className="font-light">Trabajos</li>
              <li className="font-light">Información</li>
              <li className="font-light">Contacto</li>
              <li className="font-light">Galeria</li>
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
