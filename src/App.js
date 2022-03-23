import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import PersonalInfo from './Components/PersonalInfo';

export default function App() {
  return (
    <div className='App'>
      <div className='main'>
        <PersonalInfo />
        <Contact />
        <About />
      </div>
      <Footer />
    </div>
  );
}


