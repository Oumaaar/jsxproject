
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import "./style.css";


const App = ()=>{
    return (
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={imageInSrc} alt ='imageInSrc' />          
          <img src="/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }


export default App


