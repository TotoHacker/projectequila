import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import img7 from "../../assets/Images/mexico.png";
import img8 from "../../assets/Images/mosaico.jpg";
import img9 from "../../assets/images/tequila.png";


const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center bg-[#eeeeee] ">
      {/* Banda superior decorativa */}
      <div
        className="w-full h-9 bg-repeat bg-top"
        style={{
          backgroundImage: `url(${img8})`,
          backgroundSize: "auto",
        }}
      ></div>

      {/* Logo TEQUILA México desconocido con subrayado */}
      <div className="bg-[#ececec]  py-6">
        <img
          src={img9}
          alt="Tequila México Desconocido"
          className="mx-auto h-16 md:h-16"
        />
        <span className="text-[#CBCBCB] font-bold flex justify-center items-center"> <hr className="w-48"/>
						</span>
      </div>

      {/* Redes sociales */}
     <div className="flex justify-center gap-4 mt-4 text-white text-xl">
  <div className="bg-[#1877F2] p-2 rounded-full">
    <FaFacebookF />
  </div>
  <div className="bg-[#1DA1F2] p-2 rounded-full">
    <FaTwitter />
  </div>
  <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full">
    <FaInstagram />
  </div>
  <div className="bg-[#FF0000] p-2 rounded-full">
    <FaYoutube />
  </div>
  <div className="bg-black p-2 rounded-full">
    <FaTiktok />
  </div>
</div>


      {/* Sección de contacto e información - SIEMPRE en dos columnas */}
      <div className="bg-[#eeeeee] py-6 px-12">
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto text-sm text-start px-12 font-semibold">
          {/* Columna 1: Contáctanos */}
          <div className="">
            <h3 className="text-fuchsia-800 font-bold mb-2">Contáctanos</h3>
            <p className="text-black mb-6">Secretaría de Turismo</p>
            <p className="text-black">México Desconocido</p>
          </div>

          {/* Columna 2: Información */}
          <div>
            <h3 className="text-fuchsia-800 font-bold mb-2">Información</h3>
            <p className="text-pink-600">Registro de Proveedores</p>
          </div>
        </div>
      </div>

      {/* Logo México */}
      <div className="bg-[#eeeeee] pb-6">
        <img src={img7} className="mx-auto h-10 md:h-12" alt="Logo México" />
      </div>

      {/* Pie de página final */}
      <div className="bg-[#b00367] font-semibold text-white text-sm py-4">
        <p>&copy; 2024 Pueblos Mágicos | México Desconocido</p>
        <p>Avisos de privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
