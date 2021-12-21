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
import Container from './components/Container';
import RowAndColumn from './components/RowAndColumn';
import CardElement from './components/CardElement';
import FooterElement from './components/FooterElement';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Container>
        <RowAndColumn>
          <CardElement></CardElement>
          <CardElement></CardElement>
          <CardElement></CardElement>
        </RowAndColumn>
        <RowAndColumn>
          <CardElement></CardElement>
          <CardElement></CardElement>
          <CardElement></CardElement>
        </RowAndColumn>
      </Container>
      <FooterElement />
    </>
  );
}

export default App;
