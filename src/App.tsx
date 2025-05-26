import Info from './Sections/Informacion/Informacion'
import Carousel from './components/Carrusel/Carrusel'
import Home from './components/Home/Home'
import Header from './components/header/Header'


function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Header />
        <Home />
        <Info />
      <Carousel />
      </div>
    </>
  )
}

export default App
