import Navbar from './components/Navbar';
import './App.css';
import TextBox from './components/TextBox';


function App() {
  return (
    <>
    <div className="background-image " style={{ backgroundImage: `url("https://cdn.wallpapersafari.com/57/45/pJS4Id.png")` }}>
    
    <Navbar site={"TextConvert"}/>
    <div className="container">
      <TextBox/>
      
    </div>
    </div>
    
    </>
  );
}

export default App;
