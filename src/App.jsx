
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/herosection/Hero'
import SocialMedia from './components/navbar/SocialMedia'
import Cards from './components/Cards'
import DealSection from './components/DealList/DealSection'
import Footer from './components/Footer'
import About from './components/About'



function App() {
 
  return (
    <div className='overflow-x-hidden' >
      <SocialMedia/>
      <Navbar className="sticky" />
      <Hero/>

      <div className='m-9'>
      <DealSection  title={' Deal of the Day  '}/>
      <div className=' block h-full'>
        <img src="products/Banner.webp" alt="Banner" className= ' w-full object-cover' />
      </div>
      <DealSection title={'New Arrivals'}/>

      <Cards text='summer picks'/>
       
      <Cards text=' PICK A MOOD'/>


      <About/>
      </div>
      <Footer/>
      
    
    </div>
  )
}

export default App
