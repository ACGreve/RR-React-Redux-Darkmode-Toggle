import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDark, toggleLight } from './features/modeSlice';

function App() {

  const mode = useSelector((state)=> state.mode)
  //mode and dispatch here are arbitrary names
  const dispatch = useDispatch()

  const toggleMode = () => {
    //dispatch runs the toggle functions
    mode.darkMode ? dispatch(toggleLight()) : dispatch(toggleDark())
  }
  
  return (
    <div style={{ backgroundColor: mode.color3, color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode}>Toggle</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
