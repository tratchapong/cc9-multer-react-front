import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pic, setPic] = useState(null)
  const [imgSrc, setImgSrc] = useState(null)
  const hdlChangeFile = (e) => {
    if (!e.target.files) return
    setPic(e.target.files[0])
    setImgSrc(URL.createObjectURL(e.target.files[0]))
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
          {pic && (
            <img src={imgSrc} alt="" />
          )}
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
