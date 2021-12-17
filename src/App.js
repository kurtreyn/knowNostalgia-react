import {
  Navbar,
  NavbarBrand,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  NavbarToggler,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Header />
      <Navigation />
    </>
  );
}

export default App;
