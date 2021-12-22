import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import Header from './components/HeaderComponent';
import Navigation from './components/NavigationComponent';
import Container from './components/ContainerComponent';
import RowAndColumn from './components/RowAndColumn';
import CardElement from './components/CardComponent';
import Footer from './components/FooterComponent';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Container></Container>
      <Footer />
    </>
  );
}

export default App;
