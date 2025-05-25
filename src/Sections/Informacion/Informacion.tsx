

const Info = () => {
    return (
      <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
        {/* Banner */}
        <div
            className="relative w-full h-28 bg-cover bg-[center_bottom_20%] rounded-2xl overflow-hidden mb-12 text-white text-2xl font-bold flex items-center justify-center"
            style={{ backgroundImage: `url('src/assets/Images/banner_acerca de.jpg')` }}
            >
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay oscuro */}
            <span className="relative z-10">Acerca de Tequila</span>
        </div>

  
        {/* Su magia */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-6">Su magia</h3>
          <p>
            Es el corazón de la industria del emblemático destilado, pero este pueblo es mucho más que solo la bebida.
            Es toda la cultura amigable en torno a su sabor, su historia y su preparación y es también una serie de paisajes únicos en el mundo.
          </p>
        </div>
  
        {/* El motivo */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-6">El motivo</h3>
          <p className="mb-8">Paisaje agavero y destilerías de tequila</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="mb-6">El paisaje agavero fue declarado Patrimonio Mundial por la UNESCO desde 2006.</li>
            <li className="mb-6">Comprende un área de 34,658 hectáreas.</li>
            <li className="mb-6">El agave azul se ha usado desde el siglo XVI para producir bebidas fermentadas.</li>
            <li className="mb-6">Su producto no tiene parangón en el mundo.</li>
            <li className="mb-12">Hay destilerías desde el siglo XVIII y otras recién fundadas; grandes y pequeñas.</li>
          </ul>
        </div>
  
        {/* Lo básico */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-6">Lo básico</h3>
          <p className="mb-6">El paisaje agavero y su bebida emblemática.</p>
        </div>
  
        {/* Imprescindibles */}
        <div>
          <h3 className="text-xl font-semibold mb-12">Imprescindibles</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Visitar cuando menos dos fábricas de tequila con todo y degustación.</li>
            <li>Cabalgar entre los campos de tequila.</li>
            <li>Pernoctar en La Cofradía, el único hotel con fábrica de tequila.</li>
          </ol>
        </div>
      </div>
    );
  };
  
  export default Info;
  