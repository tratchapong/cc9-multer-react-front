import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [imgSrc, setImgSrc] = useState([])
  const hdlChangeFile = (e) => {
    if (!e.target.files) return
    let allImgSrc = []
    let files = e.target.files
    for(let i=0; i<files.length;i++)
       allImgSrc[i] = URL.createObjectURL(files[i])
    setImgSrc(allImgSrc)
  }

  const hdlSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    axios.post('http://localhost:8000/uploads',data)
  }

  return (
    <div className="App">
      <form onSubmit={hdlSubmit}>
        <label htmlFor="firstName">First Name :</label>
        <input type="text" id="firstName" name="firstName"/>
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" id="lastName" name="lastName"/>
        <label htmlFor="email">E-Mail :</label>
        <input type="text" id="email" name="email"/>
        <input type="file" name="manyFiles" id="manyFiles" multiple onChange={hdlChangeFile} accept="image/*" />
        <div className="showpic">
          {imgSrc && imgSrc.map(x=>(
            <img key={x} src={x} alt="" />
          ) ) }
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
