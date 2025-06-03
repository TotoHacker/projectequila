import Info from './Sections/Informacion/Informacion'
import Carousel from './components/Carrusel/Carrusel'
import Home from './components/Home/Home'

import Footer from './components/footer/FooterComponent'


function App() {

  const [sidebar,setSidebar] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <Header setSidebar={setSidebar}/>
        <Home />
        <Info />
        <Carousel />
        <Footer />
      
      </div>
    </>
  )
}

export default App
