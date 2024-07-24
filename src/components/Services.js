import React from "react";
import ssimg1 from './static/Images/vivekkrishnanphotography-293_websize.jpg';
import ssimg2 from './static/Images/Intocandid_Prewedding_01.jpg';
import ssimg3 from './static/Images/Mumbai_Newborn_Documentary_Photographer_06.jpeg';
import ssimg4 from './static/Images/IMG_20240723_201748.jpg';
import ssimg5 from './static/Images/Mumbai_Maternityphotographer_MS_018.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Service =() => {
  return (
    <>
            <section className="service-section row-width">
        <div className="text-center">
                             <h1 className="common-text">our Service</h1>
          <hr className='w-25 mx-auto service-text' />
        </div>
        <div className="container">
          <div className="row  service-row">
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card2 style={{ maxWidth: '10rem' }}">
                  <div className="service-scale-img2">
                                   <LazyLoadImage effect="blur" src={ssimg1} className="service-card-img2 lazy-load-image" alt="..." />
                                   <div className="image-caption">Wedding Photography</div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
               <div className="card service-card2 style={{ maxWidth: '10rem' }}">
                <div className="service-scale-img2">
                                   <LazyLoadImage effect="blur" src={ssimg2} className="service-card-img2 lazy-load-image" alt="..." />
                                                                      <div className="image-caption">Pre-Wedding</div>
                </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card2 style={{ maxWidth: '10rem' }}">
                  <div className="service-scale-img2">
                                   <LazyLoadImage effect="blur" src={ssimg3} className="service-card-img2 lazy-load-image" alt="..." />
             <div className="image-caption">Kids & Family</div>
                </div>
                </div>
              </div>
            </div>
                   <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card2 style={{ maxWidth: '10rem' }}">
                  <div className="service-scale-img2">
                                   <LazyLoadImage effect="blur" src={ssimg4} className="service-card-img2 lazy-load-image" alt="..." />
                                                                                                        <div className="image-caption">Couples Sessions </div>
                </div>
                </div>
              </div>
            </div>
                   <div className="col-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="card service-card2 style={{ maxWidth: '10rem' }}">
                  <div className="service-scale-img2">
                                   <LazyLoadImage effect="blur" src={ssimg5} className="service-card-img2 lazy-load-image" alt="..." />
                                                                                                         <div className="image-caption">Maternity Sessions</div>
                </div>
                </div>
              </div>
             </div>
            </div>
          </div>
      </section>
    </>
  );
}
export default Service;
