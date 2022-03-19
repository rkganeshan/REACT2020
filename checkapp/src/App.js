import './App.css';
import React,{useState} from "react";

function App() {
  const [folderOneClicked,setfolderOneClicked]=useState(false);
  const [displayImages,setDisplayImages]=useState([]);
  const getImagePaths=(directory)=> {
    let images = [];
    directory.keys().map((item, index) => images.push(item.replace("./", "")));
    return images;
  }
  const handleClick=()=>{
    const directory = require.context("./images/", false, /\.(png|jpe?g|svg)$/);
  let imagePaths = getImagePaths(directory);
  console.log(imagePaths);
  let images = [];
  imagePaths.map((path) => images.push(require("./images/" + path)));
  console.log(images);
  setfolderOneClicked(true);
  setDisplayImages(images);
  }
  return (
    <div className="App">
      <h1>Just some text, check your console.</h1>
      <button 
      onClick={handleClick}
      >
        Click me!
      </button>
      {folderOneClicked && 
        displayImages.map((item,idx)=>{
          console.log(idx,`./images/${item}`)
          return(
            <div key={idx}>
              <img src={`${item}`}
          ></img>
            </div>
            
          )
        })
      }
    </div>
  );
}

export default App;
