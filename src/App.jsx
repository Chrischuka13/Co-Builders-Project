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
import BookingPage from './pages/bookingpage'
import Payment from './pages/Payment'
import ServiceSelection from './pages/Serviceselection'
import BookingSummary from './pages/Bookingsummary'
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
        <Route path='/booking' element={<BookingPage/>}/>
        <Route path='/modal2' element={<ServiceSelection/>}/>
        <Route path='/modal3' element={<BookingSummary/>}/>
        <Route path='/modal4' element={<Payment/>}/>

        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/bookings' element={<Bookings/>}/>
        
      </Routes>
   

    
    
    
  )
}
 
    



export default App
