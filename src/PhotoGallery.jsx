import React from "react";
import Photo1 from "../src/images/photo1.jpg";
import Photo2 from "../src/images/photo2.jpg";
import Photo3 from "../src/images/photo3.jpg";
import Photo4 from "../src/images/photo4.png";
import Photo5 from "../src/images/photo5.jpg";
import Photo6 from "../src/images/photo6.jpg";
import Photo7 from "../src/images/photo7.jpg";
import Photo8 from "../src/images/photo8.png";




const PhotoGallery = () => {
    return (
        <>
            <section>
                <div className="ttm-page-title-row-inner ttm-bgcolor-darkgrey">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title">My Photo</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/*}        <div classNameName="container">
                <div className="row ">
            
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo1} className="img-rounded" alt="" width="300px" height="400px" />
        <div className="overlay">
            <div className="text">Hello doctor</div>
        </div>
        
         
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo2} className="img-rounded" alt="" width="300px" height="400px" />
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo3} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo4} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo5} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo6} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo7} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo1} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
      <div className=" col-lg-4 col-md-4 col-sm-4 col-12">
        <figure><img src={Photo3} className="img-rounded" alt="" width="300px" height="400px"/>
          
        </figure>
      </div>
    
    </div>
    </div>*/}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo1} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> RK</p>
                                </div>
                            </a> </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo2} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> RK</p>
                                </div>
                            </a> </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo3} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> RK</p>
                                </div>
                            </a> </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo4} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> Rk</p>
                                </div>
                            </a> </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo5} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> RK</p>
                                </div>
                            </a> </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo6} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> RK</p>
                                </div>
                            </a> </div>
                        </div>
                        <div className="col-md-4">
                            <div className="content"> <a href="#">
                                <div className="content-overlay"></div> <img className="content-image" src={Photo7} />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Welcome</h3>
                                    <p className="content-text"><i className="fa fa-map-marker"></i> RK</p>
                                </div>
                            </a> </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    );
};

export default PhotoGallery;