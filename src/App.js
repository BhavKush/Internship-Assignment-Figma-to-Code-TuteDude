import './App.css';
import Courses from './components/Courses';
import Description from './components/Description';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
    <Navbar/>
    <Wrapper/>
    <Description/>
    <Courses/>
    <Footer/>
    </>
  );
}

export default App;
