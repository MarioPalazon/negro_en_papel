

export default function WhatsAppButton() {

    const handleCotizar=()=>{

        const phoneNumber = '+56944042334';
        const message = 'Hola, me gustaría comunicarme contigo.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    }

  return (
    <button className="w-[60%] md:w-[60%] bg-[#1E1E1E] text-white rounded-2xl py-2 cursor-pointer hover:bg-gray-800"
        onClick={handleCotizar}>
        Cotizar
    </button>
  )
}
