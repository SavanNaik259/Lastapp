import React from "react";
import showimg1 from './static/Images/vivekkrishnanphotography-115_websize.jpg';
import showimg2 from './static/Images/vivekkrishnanphotography-465.jpg';
import showimg3 from './static/Images/pexels-photo-6085682.jpeg';
import showimg4 from './static/Images/vivekkrishnanphotography-82.jpg';
import showimg5 from './static/Images/image-asset.jpeg';
import showimg6 from './static/Images/vivekkrishnanphotography-482.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SlidingComponent2 from './SlidingComponent2';
import imgSlide1 from './static/Images/vivekkrishnanphotography-14 (1).jpg';
import imgSlide2 from './static/Images/WK35053-scaled.jpg';
import imgSlide3 from './static/Images/vivekkrishnanphotography-vidya-and-vignesh-21.jpg';
import imgSlide4 from './static/Images/vivekkrishnanphotography-akriti-and-arjun-43.jpg';
import imgSlide5 from './static/Images/vivekkrishnanphotography-23.jpg';
import simg1 from './static/Images/IMG_20240716_153006.jpg';
import simg2 from './static/Images/vivekkrishnanphotography-176_websize.jpg';
import simg3 from './static/Images/vivekkrishnanphotography-20.jpg';
const images = [
    { src: imgSlide1, alt: 'Image 1' },
    { src: imgSlide2, alt: 'Image 2' },
        { src: imgSlide3, alt: 'Image 3' },
            { src: imgSlide4, alt: 'Image 4' },
                { src: imgSlide5, alt: 'Image 5' },
                ];
const Portfolio =()=>{
  return(
    <>
     <section> 
<div className="container row-width">          
<h1 className="common-text fs-1 fw-normal">Portfolio</h1>
          <hr className='w-50 mx-auto' />
  <div className="row gx-1">
    <div className="col-6">
      <div className="d-flex justify-content-center valign-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg1} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg2} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg3} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg4} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg5} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card">
                  <div className="show-scale-img">
          <LazyLoadImage effect="blur" src={showimg6} className="card-img-show lazy-load-image full-width" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <div >
      <h1 className="common-text fs-4 fw-normal">Frames of Life: The Essence of Photography</h1>
                <hr className='w-50 mx-auto row-width' />
   <SlidingComponent2 images={images} />
    </div>
          <section className="service-section row-width">
        <div className="text-center">
          <h1 className="common-text fs-2 row-width">Combination of Art & Skill</h1>
          <hr className='w-25 mx-auto' />
        </div>
        <div className="container">
          <div className="row  service-row">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                       <div className="service-scale-img">
                                   <LazyLoadImage effect="blur" src={simg1} className="service-card-img lazy-load-image" alt="..." />
                </div>
                  <div className="card-body text-end cover-card change-card-color">
                    <h5 className="card-title mt-3 text-capitalize">Event photography</h5>
                    <p className="card-text mt-2 mb-3 text-start">Event photography captures the essence and energy of special occasions, from weddings and corporate events to birthday parties and concerts. Our skilled photographers document every memorable moment, ensuring you can relive the experience through high-quality images.</p>
                    <div className="text-lg-start">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
               <div className="card service-card style={{ maxWidth: '10rem' }}">
                <div className="service-scale-img">
                                   <LazyLoadImage effect="blur" src={simg2} className="service-card-img lazy-load-image" alt="..." />
                </div>
                  <div className="card-body text-end cover-card change-card-color">
                    <h5 className="card-title mt-3 text-capitalize">portrait photography</h5>
                    <p className="card-text mt-2 mb-3 text-capitalize text-start ">Portrait photography captures the essence, personality, and emotions of individuals or groups. It goes beyond just taking pictures, creating visual stories that highlight the unique qualities of each person. Whether it’s professional headshots, family portraits, or creative shoots, our sessions bring out the best in everyone.</p>
                    <div className="text-lg-start">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card style={{ maxWidth: '10rem' }}">
                  <div className="service-scale-img">
                                   <LazyLoadImage effect="blur" src={simg3} className="service-card-img lazy-load-image" alt="..." />
                </div>
                  <div className="card-body text-end cover-card change-card-color">
                    <h5 className="card-title mt-3 text-capitalize">Videography </h5>
                    <p className="card-text mt-2 mb-3 text-capitalize text-start ">Videography brings your special moments to life through dynamic and engaging visuals. From weddings and corporate events to promotional videos and personal projects, our expert videographers capture the essence of your story with precision and creativity.</p>
                    <div className="text-lg-start">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
    )
}
export default Portfolio;
