//import React, { useEffect, useState } from 'react';
//import Typed from 'typed.js';
import './App.css';
import SliderComponent from './SliderComponent';
import imgSlide1 from './static/Images/AP_Wedding_327-4K.jpg';
import imgSlide2 from './static/Images/PA_Haldi_230-X4.jpg';
import imgSlide3 from './static/Images/vivekkrishnanphotography-18_websize.jpg';
import imgSlide4 from './static/Images/Intocandid_Prewedding_01.jpg';
import imgSlide5 from './static/Images/AP_FirstLook_149-X4.jpg';
//249d5a30d4ead676bf8eec1647972714ed536f34.jpg
//
const images = [
    { src: imgSlide1, alt: 'Image 1' },
    { src: imgSlide2, alt: 'Image 2' },
        { src: imgSlide3, alt: 'Image 3' },
            { src: imgSlide4, alt: 'Image 4' },
                { src: imgSlide5, alt: 'Image 5' },
                ];
const Home =()=>{
    return (
      <>
      <div >
   <SliderComponent images={images} 
      />
   
   </div>
      </>
    );
  }
  export default Home;

                                                                                                                                                                                                                                                                                        
