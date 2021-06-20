import React from 'react';
import slide1 from '../src/images/Slider_1.jpg';
import slide2 from '../src/images/Slider_2.jpg';
import slide3 from '../src/images/Slider_3.jpg';
import Appointment from '../src/images/Appimage.jpg';




const Home = () => {
    return (
        <>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Let's make your life happier</h3>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section id="appointment" data-stellar-background-ratio="3">
                <div className="container">
                    <div className="row">



                        <div className="col-md-6 col-sm-6">
                            <img src={Appointment} className="img-thumbnail" alt="" />
                        </div>

                        <div className="col-md-6 col-sm-6">

                            <form id="appointment-form" role="form" method="post" action="#">


                                <div className="section-title wow fadeInUp" data-wow-delay="0.4s">
                                    <h2>Make an appointment</h2>
                                </div>

                                <div className="wow fadeInUp" data-wow-delay="0.8s">
                                    <div className="col-md-12 col-sm-12">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Full Name" />
                                    </div>

                                    <div className="col-md-12 col-sm-12">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
                                    </div>

                                    <div className="col-md-12 col-sm-12">
                                        <label for="date">Select Date</label>
                                        <input type="date" name="date" value="" className="form-control" />
                                    </div>

                                    <div className="col-md-12 col-sm-12">
                                        <label for="select">Select Department</label>
                                        <select className="form-control">
                                            <option>General Health</option>
                                            <option>Cardiology</option>
                                            <option>Dental</option>
                                            <option>Medical Research</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12 col-sm-12">
                                        <label for="telephone">Phone Number</label>
                                        <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" />
                                        <label for="Message">Additional Message</label>
                                        <textarea className="form-control" rows="5" id="message" name="message" placeholder="Message"></textarea>
                                        <button type="submit" className="form-control" id="cf-submit" name="submit">Submit Button</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
            







        </>









    )
};
export default Home;