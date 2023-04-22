import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from '../components/NavBar';

export default function Root() {
    return (
      <>
      <NavBar></NavBar>
      <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/28/67/35/286735ae705f5fecaa0f606d95981fb4.jpg")`, backgroundRepeat: 'no-repeat', height: '100vh', width: '100vw', backgroundSize: 'cover'}}>
      <h1 style={{ color: 'white', fontFamily: 'fantasy', padding: '1rem' }}>The Book of Heroes</h1>
      </div>
      </>
    );
  }