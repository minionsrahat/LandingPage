
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
import Slider from './Components/Slider/Slider';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <>
    <div className="bg-gray-100">
    <Navbar></Navbar>
      <Slider></Slider>
      <About></About>
      <Service></Service>
      <WhyChooseUs></WhyChooseUs>
    </div>
      
    </>
  );
}

export default App;
