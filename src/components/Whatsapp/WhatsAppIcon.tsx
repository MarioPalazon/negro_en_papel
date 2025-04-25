import { Link } from "react-router-dom";

const WhatsAppIcon = () => {

    const phoneNumber = '+56944042334';
    const message = 'Hola, me gustaría comunicarme contigo.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    
    <Link className="flex justify-center" to={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img className="w-[70%]" src="/img/icon-whatsapp.png" alt="WhatsApp" />
    </Link>
  )
}

export default WhatsAppIcon
