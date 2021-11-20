import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import CarouselData from './components/CarouselData';

function App() {
  return (
    <div className="App">
      <Header />
      <h2>Special Offers</h2>
      <Carousel carouselImgs={CarouselData}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
