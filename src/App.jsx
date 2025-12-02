import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import PreService from './components/PreService'
import Services from './components/Services'
import About from './components/About'
import HowitWorks from './components/HowitWorks'
import WhyUs from './components/WhyUs'
import Review from './components/review'
import Footer from './components/Footer'
import FAQs from './components/FAQs'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Modal1 from './pages/Modal1'
import Modal4 from './pages/Modal4'
import Modal2 from './pages/Modal2'
import Modal3 from './pages/Modal3'
import SignIn from './pages/Signin'
import Appointments from './pages/Dashboard/Appointments'
import Dashboard from './pages/Dashboard/Dashboard'
import Bookings from './pages/Dashboard/Bookings'





function App() {
  
  return (
  
      <Routes>
        <Route path='/' element={
          <>
        <NavBar/>
        <HeroSection/>
        <PreService/>
        <Services/>
        <About/>
        <HowitWorks/>
        <WhyUs/>
        <FAQs/>
        <Review/>
        <Footer/>
       
        </>
      }/>
        
        <Route path='/' element={<App/>}/>
        
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/booking' element={<Modal1/>}/>
        <Route path='/modal2' element={<Modal2/>}/>
        <Route path='/modal3' element={<Modal3/>}/>
        <Route path='/modal4' element={<Modal4/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        
      </Routes>
   

    
    
    
  )
}
 
    



export default App
