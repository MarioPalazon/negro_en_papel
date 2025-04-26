import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import WhatsAppIcon from "../components/Whatsapp/WhatsAppIcon"

const AppLayout = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (ruta: string, idScroll: string) => {
    if (ruta === "galeria") {
      navigate("/galeria");
    } else {
      if (location.pathname !== "/") {
        // Si estamos en otra ruta, navegamos al home y guardamos a qué sección ir
        sessionStorage.setItem("scrollTo", idScroll);
        navigate("/");
      } else {
        // Ya estamos en home: hacer scroll inmediato
        const section = document.getElementById(idScroll);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  
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
            
            <Link className="flex justify-center" to="https://www.instagram.com/negro_enpapel/" target="_blank" rel="noopener noreferrer">
              <img className="w-[70%]" src="/img/icon-instagram-color.png" alt="Instagram" />              
            </Link>

            <WhatsAppIcon />

          </div>
        </div>
        
        <div className="w-full flex justify-center bg-[#1E1E1E]">
          <nav className="w-full md:w-[40%]">
            <ul className="flex justify-around text-white py-3">
              <li className="font-light">
                <button className="cursor-pointer hover:text-cyan-50" onClick={() =>handleClick("","trabajosId")}>
                    Trabajos
                </button>
              </li>
              <li className="font-light">
                <button className="cursor-pointer hover:text-cyan-50" onClick={() =>handleClick("","informacionId")}>
                    Información
                </button>
              </li>
              <li className="font-light">
                <button className="cursor-pointer hover:text-cyan-50" onClick={() =>handleClick("","contactoId")}>Contacto
                </button>
              </li>
              <li className="font-light">
                <button onClick={()=>handleClick("galeria","")}>Galeria</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

        <Outlet />

      <footer className="w-full bg-[#1E1E1E] py-3">
          <p className="text-white text-center">©2025 negro_enpapel</p>
      </footer>
      
    </div>
  )
}

export default AppLayout
