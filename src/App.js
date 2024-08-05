import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Pratham";
function App() {
  return (
 <>
  <Navbar title="TextUtils" aboutText="About Us" />
  
  <div className="container my-3">
  <TextForm heading="Enter some text here"/>
  </div>
 </>
  );
 }


export default App;
