import React from 'react';
import { Container} from 'react-bootstrap';
import Navbar from './Components/NavBar/navbar';
import Services from './Components/Services/services';
import Footer from './Components/Footer/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Container>
      <Navbar />
      <Services />
      <Footer />
    </Container>
  );
}

export default App;
