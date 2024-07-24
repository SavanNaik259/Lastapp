import React from "react";
import aimg1 from './static/Images/IMG_20240706_143509.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const About =()=>{
    return (
      <>
       <section className="about-section row-width">
      <h1 className="common-text">about us</h1>
      <hr className='w-25 mx-auto'/>
      <div className="card mb-3 r-card" style={{ maxWidth: '94vw',border:'none' }}>
  <div className="row ">
    <div className="col-md-4 d-flex justify-content-center align-items-center">
     <LazyLoadImage effect="blur" src={aimg1} className=" about-img img-fluid text-center lazy-load-image" alt="..."/>
    </div>
    <div className="col-md-8 d-flex justify-content-center align-items-center">
      <div className="card-body">
        <p className="card-text fs-3 text-center lh-lg">we specialize in capturing the unforgettable moments of your most cherished events. With years of experience and a passion for storytelling through images, we aim to provide you with beautiful, timeless photographs that you will treasure forever.</p>

      </div>
    </div>
  </div>
</div>
</section>
   </>
    );
  }
  export default About;
