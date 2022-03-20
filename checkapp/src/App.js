import './App.css';
import React,{useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Card} from "react-bootstrap";
import ReactCardCarousel from "react-card-carousel";


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
     <div className="container">
     <div className="card" style={{width: "18rem"}}>
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                {/* <div class="carousel-item active">
                  <img src="..." class="d-block w-100" alt="..."></img>
                </div> */}
                {folderOneClicked && 
        displayImages.map((item,idx)=>{
          // console.log(idx,`./images/${item}`)
          if(idx==0)
          {
            return(
              <div className="carousel-item active" key={idx}>
                <img src={`${item}`}
            className="d-block w-100" alt="..."></img>
              </div>
              
            )
          }
         else{
          return(
            <div className="carousel-item" key={idx}>
              <img src={`${item}`}
          className="d-block w-100" alt="..."></img>
            </div>
            
          )
         }
        })
      }
               
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
      </div> 
      </div> 
     
    </div>
  );
}

export default App;
