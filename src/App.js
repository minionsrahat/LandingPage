import './App.css';
import About from './Components/About/About';
import BookAppointment from './Components/BookAppointment/BookAppointment';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
import Slider from './Components/Slider/Slider';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import Footer from './Components/Footer/Footer' ;

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar></Navbar>
        <Slider></Slider>
        <About></About>
        <Service></Service>
        <WhyChooseUs></WhyChooseUs>
        <BookAppointment></BookAppointment>
        <Footer></Footer>
      </div>
    

    </>
  );
}

export default App;
