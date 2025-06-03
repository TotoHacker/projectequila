import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import img6 from "../../assets/Images/tequila.png";
import img7 from "../../assets/Images/mexico.png";
import img8 from "../../assets/Images/mosaico.jpg";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#be2875",
        color: "#fff",
        textAlign: "center",
        left: 0,
        bottom: 0,
      }}
    >
      <div
        className="w-full h-9 bg-repeat bg-top"
        style={{
          backgroundImage: `url(${img8})`,
          backgroundSize: "auto",
        }}
      ></div>

      <div className="py-6 text-center" style={{ backgroundColor: "#eeeeee" }}>
        <img
          src={img6}
          className="mx-auto h-16 md:h-20"
          alt="Tequila México Desconocido"
        />
        <div className="flex justify-center gap-4 mt-4 text-white text-xl">
          <div className="bg-[#1877F2] p-2 rounded-full">
            <FaFacebookF />
          </div>
          <div className="bg-[#1DA1F2] p-2 rounded-full">
            <FaTwitter />
          </div>
          <div className="bg-[#E1306C] p-2 rounded-full">
            <FaInstagram />
          </div>
          <div className="bg-[#FF0000] p-2 rounded-full">
            <FaYoutube />
          </div>
          <div className="bg-black p-2 rounded-full">
            <FaTiktok />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-center gap-16 text-sm py-6 items-start"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div>
          <h3 className="text-fuchsia-800 font-bold mb-2">Contáctanos</h3>
          <p className="text-black">Secretaría de Turismo</p>
          <p className="text-black">México Desconocido</p>
        </div>
        <div>
          <h3 className="text-fuchsia-800 font-bold mb-2">Información</h3>
          <p className="text-pink-600">Registro de Proveedores</p>
        </div>
      </div>

      <div className="bg-[#eeeeee] pb-6">
        <img src={img7} className="mx-auto h-10 md:h-12" alt="Logo México" />
      </div>

      <div className="gap-4 text-sm p-6">
        <span>&copy; 2024 Pueblos Mágicos | México desconocido</span>
        <span className="pl-190">Avisos de privacidad</span>
      </div>
    </footer>
  );
};

export default Footer;