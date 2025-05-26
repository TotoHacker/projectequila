import Info from './Sections/Informacion/Informacion'
import Carousel from './components/Carrusel/Carrusel'
import Home from './components/Home/Home'


function App() {


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Home />
        <Info />
      <Carousel />
      </div>
    </>
  )
}

export default App
