//import logo from './logo.svg';
import './App.css';
import Describtion from './Components/Describtion.jsx';
import Name from './Components/Name.jsx';
import Image from './Components/Image.jsx';
import image from './Components/image.png';

const App=() =>{

  return (
    <div className="App">
      <div className="card">
        {/* //image */}
       <div className="image">
        <Image img={image} />
       </div>
       
       {/* cardright */}

       <div className="card-right">
           <Name any='A Title'/>
            
         <hr />
         <Describtion />
       </div>
      </div>
    </div>
    
  );
}

export default App;
