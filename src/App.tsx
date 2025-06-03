import Info from './Sections/Informacion/Informacion'
import Carousel from './components/Carrusel/Carrusel'
import ImageCardsCarousel from './components/Catalogo/Catalogo'
import Home from './components/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/footer/FooterComponent'
import Header from './components/header/Header'
import { useState } from 'react'


function App() {

  const [sidebar,setSidebar] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <Header setSidebar={setSidebar}/>
        <Home />
        <ImageCardsCarousel/>
        <Info />
        <Carousel />
        <Footer />
      </div>
    </>
  )
}

export default App