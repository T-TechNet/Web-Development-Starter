import './App.css';
import ContactServer from './component/ContactServer';
import Header from './component/Header';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div>Hello React! Let's start coding.</div>
      <ContactServer />
    </div>
  );
}

export default App;
