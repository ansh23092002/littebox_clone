
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/herosection/Hero'
import SocialMedia from './components/navbar/SocialMedia'

import DealSection from './components/DealList/DealSection'


function App() {
 
  return (
    <div >
      <SocialMedia/>
      <Navbar className="sticky" />
      <Hero/>
      <DealSection/>

    
    </div>
  )
}

export default App
