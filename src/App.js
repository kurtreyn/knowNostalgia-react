import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import Header from './components/HeaderComponent';
import Navigation from './components/NavigationComponent';
import Container from './components/ContainerComponent';
import RowAndColumn from './components/RowAndColumn';
import CardComponent from './components/CardComponent';
import Footer from './components/FooterComponent';
import { HomePageImages } from './shared/HomePageImages';

function App() {
  const semiCharmed = '../images/thirdEyeBlind-semiCharmedLife.jpg';
  return (
    <>
      <Header />
      <Navigation />
      <CardComponent image={semiCharmed} />
      <Footer />
    </>
  );
}

export default App;
