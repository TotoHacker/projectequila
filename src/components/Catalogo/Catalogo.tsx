import img1 from '../../assets/images/balneario-el-rincon-jalisco-peces.jpg';
import img2 from '../../assets/Images/centro-cultural-juan-beckmann-gallardo-1536x870.jpg';
import img3 from '../../assets/Images/guachimontones-1536x1024.jpg';
import img4 from '../../assets/Images/TEQUILA_RAPEL-Y-SENDERISMO-EN-LOS-AZULES_AR_ok.jpg';
import img5 from '../../assets/Images/cabalgatas.jpg';
import img6 from '../../assets/Images/Tequila-Jalisco-Jose-Cuervo-Express-Cristobal-de-Alba-CDA_IO8A1941.jpg';

const items = [
  {
    image: img1,
    title: 'Balneario El Rincón de Teuchitlán',
    subtitle: 'TEQUILA',
  },
  {
    image: img2,
    title: 'Centro Cultural Juan Beckmann Gallardo',
    subtitle: 'TEQUILA',
  },
  {
    image: img3,
    title: 'Centro Interpretativo Guachimontones',
    subtitle: 'TEQUILA',
  },
  {
    image: img4,
    title: 'Explora la cascada Los Azules Tequila',
    subtitle: 'TEQUILA',
  },
  {
    image: img5,
    title: 'Recorre los campos agaveros a caballo',
    subtitle: 'TEQUILA',
  },
  {
    image: img6,
    title: 'Viaja en el tren Jose Cuervo Express',
    subtitle: 'TEQUILA',
  },
];

export default function ImageCatalog() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative h-48 rounded-2xl overflow-hidden shadow-md"
        >
          {/* Imagen */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            draggable={false}
          />

          <div className="absolute inset-0 bg-black opacity-60 z-10" />

          {/* Texto encima del overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
            <span className="text-xs text-white uppercase font-medium tracking-wider">
              {item.subtitle}
            </span>
            <span className="text-white font-semibold leading-tight text-xl">
              {item.title}
            </span>
          </div>
        </div>
      ))}
      <div className="col-span-2 text-center pt-2">
        <button className="text-sm text-gray-600 hover:text-black font-medium">
          Ver más atractivos
        </button>
      </div>
    </div>
  );
}


