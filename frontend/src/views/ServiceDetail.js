import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

import { Link, useParams } from 'react-router-dom'
import {useState, useEffect }  from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker';
const swal = require('sweetalert2')



const baseUrl = 'http://127.0.0.1:8000/api';
function ServiceDetail() {
    // const [date, setDate] = useState(new Date());
    // const [date, setDate] = useState(new Date().toLocaleDateString('fr-FR'));

    const [service, setService] = useState([])
    const [order, setOrder] = useState({
        buyer:"",
        seller:"",
        service:"",
        description:"",
        booking_date:"",
        booking_time:"",
        duration:"",
    })
    
    const token = localStorage.getItem('authTokens');
    const decoded = jwtDecode(token);
    const buyer_id = decoded.user_id;
    
    const {service_id} = useParams()
    
    // Fetch Serivce Detail
    useEffect(() => {
        try {
          axios.get(baseUrl + '/service/' + service_id + '/').then((res) => {
            setService(res.data)
          })
        } catch (error) {
            
        }
      }, [])

    const handleChange = (event) => {
        setOrder({
            ...order,
            [event.target.name]:event.target.value
        })
    }
    const makeOrder = () => {
        const _formdata = new FormData()
        _formdata.append("buyer", buyer_id)
        _formdata.append("seller", service.user.id)
        _formdata.append("service", service_id)
        _formdata.append("description", order.description)
        _formdata.append("booking_date", order.booking_date)
        _formdata.append("booking_time", order.booking_time)
        _formdata.append("duration", order.duration)

        try {
            axios.post(baseUrl + '/order-service/', _formdata).then((res) => {
                console.log(res.data);
                swal.fire({
                    title: "Service Order Sent Successfully. ",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'bottom-right',
                    timerPRogressBase: true,
                    showConfirmButton: false,
                })
                setService({
                    description:"",
                    booking_date:"",
                    booking_time:"",
                    duration:"",
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <Header />
          <div className="bannergallery-section">
            <div className="gallery-slider d-flex">
            <div className="gallery-widget">
                <a href="/assets/img/gallery/gallery1/gallery-2.jpg" data-fancybox="gallery1">
                  <img className="img-fluid" alt="Image" src="/assets/img/gallery/gallery1/gallery-2.jpg" />
                </a>
              </div>
              <div className="gallery-widget">
                <a href="/assets/img/gallery/gallery1/gallery-2.jpg" data-fancybox="gallery1">
                  <img className="img-fluid" alt="Image" src="/assets/img/gallery/gallery1/gallery-2.jpg" />
                </a>
              </div>
              <div className="gallery-widget">
                <a href="/assets/img/gallery/gallery1/gallery-3.jpg" data-fancybox="gallery1">
                  <img className="img-fluid" alt="Image" src="/assets/img/gallery/gallery1/gallery-3.jpg" />
                </a>
              </div>
              <div className="gallery-widget">
                <a href="/assets/img/gallery/gallery1/gallery-4.jpg" data-fancybox="gallery1">
                  <img className="img-fluid" alt="Image" src="/assets/img/gallery/gallery1/gallery-4.jpg" />
                </a>
              </div>
              <div className="showphotos">
                <a href="/assets/img/gallery/gallery1/gallery-3.jpg" data-fancybox="gallery1">... Show Photos</a>
              </div>
            </div>
          </div>
          <section className="details-description">
            <div className="container">
              <div className="about-details">
                <div className="about-headings">
                  <div className="author-img">
                    <img src="/assets/img/profiles/avatar-10.jpg" alt="authorimg" />
                  </div>
                  <div className="authordetails">
                    <h5>{service.title}</h5>
                    {/* <p>{service.description.substring(0, 7) + "..."}</p> */}
                    {/* <p>{service.description.substring(0, 7) + "..."}</p> */}
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fa-regular fa-star rating-color" />
                      <span className="d-inline-block average-rating"> 4.5 </span>
                    </div>
                  </div>
                </div>
                <div className="rate-details">
                  <h2>$350</h2>
                  <p>Fixed</p>
                </div>
              </div>
              <div className="descriptionlinks">
                <div className="row">
                  <div className="col-lg-9">
                    <ul>
                      {/* <li><a href="javascript:void(0);"><i className="feather-map" /> Get Directions</a></li> */}
                      {/* <li><a href="javascript:void(0);"><img src="/assets/img/website.svg" alt="website" />Website</a></li> */}
                      <li><a href="javascript:void(0);"><i className="feather-share-2" /> share</a></li>
                      <li><a href="javascript:void(0);"><i className="fa-regular fa-comment-dots" /> Write a review</a></li>
                      <li><a href="javascript:void(0);"><i className="feather-flag" /> report</a></li>
                      <li><a href="javascript:void(0);"><i className="feather-heart" /> Save</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <div className="callnow">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Order Service
                        </button>

                        <div class="modal fade" style={{marginTop:"100px"}} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Order <b><i>'{service.title}'</i></b></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type="text" name='description' onChange={handleChange} value={order.description} className='form-control mb-3' placeholder='Enter Description (Optional)' />
                                {/* <DateTimePicker  /> */}
                                <small className='text-muted float-start'>Choose Order Date and TIme</small> 
                                <input type="time" onChange={handleChange} value={order.booking_time} name="booking_time" className='form-control mt-1' />
                                <input type="date" onChange={handleChange} value={order.booking_date} name="booking_date" className='form-control mt-1' />
                                <br />
                                <small className='text-muted float-start'>Select Duration</small> 
                                <select name="duration" onChange={handleChange} className='form-select' id="">
                                    <option className='form-select' value="3_days">3 Days</option>
                                    <option className='form-select text-capitalize' value="1_week">1 week</option>
                                    <option className='form-select' value="less_a_month">Less Than a Month</option>
                                    <option className='form-select' value="1_to_3_months">1 to 3 Months</option>
                                </select>
                                {/* <DateTimePicker  className='float-start'  style={{border:"none"}}  value={date} dateFormat="dd/MM/yyyy" onChange={(date) => { const d = new Date(date).toLocaleDateString('fr-FR'); console.log(d); setDate(d); }}  name="booking_date"/> */}

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={makeOrder} class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="details-main-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="card ">
                    <div className="card-header">
                      <span className="bar-icon">
                        <span />
                        <span />
                        <span />
                      </span>
                      <h4>Description</h4>
                    </div>
                    <div className="card-body">
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="card-header">
                      <span className="fas fa-location fs-4 text-danger">
                        <span />
                        <span />
                        <span />
                      </span>
                      <h4>Location & Address</h4>
                    </div>
                    <div className="card-body">
                      <p>{service.address}</p>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="card-header">
                      <i className="feather-list" />
                      <h4>Listing Features</h4>
                    </div>
                    <div className="card-body">
                      <div className="lisiting-featues">
                        <div className="row">
                          <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-1.svg" alt="Room amenties" />
                            </div>
                            <div className="featues-info">
                              <h6>Room <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-2.svg" alt="Bathroom amenities" />
                            </div>
                            <div className="featues-info">
                              <h6>Bathroom <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-3.svg" alt="Media Technology" />
                            </div>
                            <div className="featues-info">
                              <h6>Media &amp; Technology <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-4.svg" alt="Food Security" />
                            </div>
                            <div className="featues-info">
                              <h6>Food &amp; Security <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-5.svg" alt="Media Technology" />
                            </div>
                            <div className="featues-info">
                              <h6>Services &amp; Extra <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-6.svg" alt="Media Technology" />
                            </div>
                            <div className="featues-info">
                              <h6>Outdoor &amp; View <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex  access-feature align-items-center col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-7.svg" alt="Media Technology" />
                            </div>
                            <div className="featues-info">
                              <h6>Accessibility <br /> amenities</h6>
                            </div>
                          </div>
                          <div className="featureslist d-flex align-items-center access-feature col-lg-4 col-md-4">
                            <div className="feature-img">
                              <img src="/assets/img/featured/Feature-8.svg" alt="Media Technology" />
                            </div>
                            <div className="featues-info">
                              <h6>Safety &amp; Security<br /> amenities</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card gallery-section ">
                    <div className="card-header ">
                      <img src="/assets/img/galleryicon.svg" alt="gallery" />
                      <h4>Gallery</h4>
                    </div>
                    <div className="card-body">
                      <div className="gallery-content">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget">
                              <a href="/assets/img/gallery/gallery1/gallery-5.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-1.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget">
                              <a href="/assets/img/gallery/gallery1/gallery-6.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-2.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget">
                              <a href="/assets/img/gallery/gallery1/gallery-8.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-3.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget me-0">
                              <a href="/assets/img/gallery/gallery1/gallery-11.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-11.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget">
                              <a href="/assets/img/gallery/gallery1/gallery-9.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-9.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget">
                              <a href="/assets/img/gallery/gallery1/gallery-10.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-10.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget">
                              <a href="/assets/img/gallery/gallery1/gallery-11.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-11.jpg" />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="gallery-widget me-0">
                              <a href="/assets/img/gallery/gallery1/gallery-6.jpg" data-fancybox="gallery1">
                                <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-2.jpg" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="card-header  align-items-center">
                      <i className="feather-star" />
                      <h4>Ratings</h4>
                    </div>
                    <div className="card-body">
                      <div className="ratings-content">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="ratings-info">
                              <p className="ratings-score"><span>4</span>/5</p>
                              <p>OVERALL</p>
                              <p> <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fa-regular fa-star" />
                              </p>
                              <p>Based on Listing</p>
                            </div>
                          </div>
                          <div className="col-lg-9">
                            <div className="ratings-table table-responsive">
                              <table className>
                                <tbody><tr>
                                    <td className="star-ratings"><i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                    </td>
                                    <td className="scrore-width"><span> </span></td>
                                    <td> 0</td>
                                  </tr>
                                  <tr>
                                    <td className="star-ratings"><i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fa-regular fa-star rating-color" />
                                    </td><td className="scrore-width selected"><span> </span></td>
                                    <td> 1</td>
                                  </tr>
                                  <tr>
                                    <td className="star-ratings"><i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fa-regular fa-star rating-color" />
                                      <i className="fa-regular fa-star rating-color" />
                                    </td>
                                    <td className="scrore-width"><span> </span></td>
                                    <td> 0</td>
                                  </tr>
                                  <tr>
                                    <td className="star-ratings"><i className="fas fa-star filled" />
                                      <i className="fas fa-star filled" />
                                      <i className="fa-regular fa-star rating-color" />
                                      <i className="fa-regular fa-star rating-color" />
                                      <i className="fa-regular fa-star rating-color" />
                                    </td><td className="scrore-width"><span> </span></td>
                                    <td> 0</td>
                                  </tr>
                                  <tr>
                                    <td className="star-ratings"><i className="fas fa-star filled" />
                                      <i className="fa-regular fa-star rating-color" />
                                      <i className="fa-regular fa-star rating-color" />
                                      <i className="fa-regular fa-star rating-color" />
                                      <i className="fa-regular fa-star rating-color" />
                                    </td>
                                    <td className="scrore-width"><span> </span></td>
                                    <td> 0</td>
                                  </tr>
                                </tbody></table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card review-sec  mb-0">
                    <div className="card-header  align-items-center">
                      <i className="fa-regular fa-comment-dots" />
                      <h4>Write a Review</h4>
                    </div>
                    <div className="card-body">
                      <div className="review-list">
                        <ul className>
                          <li className="review-box ">
                            <div className="review-profile">
                              <div className="review-img">
                                <img src="/assets/img/profiles/avatar-11.jpg" className="img-fluid" alt="img" />
                              </div>
                            </div>
                            <div className="review-details">
                              <h6>Joseph</h6>
                              <div className="rating">
                                <div className="rating-star">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-overall" />
                                </div>
                                <div><i className="fa-sharp fa-solid fa-calendar-days" /> 4 months ago</div>
                                <div>by: Demo Test</div>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                              </p>
                              <div className="row">
                                <div className="col-lg-3  col-md-3 col-sm-3">
                                  <div className="review-gallery">
                                    <a href="/assets/img/gallery/gallery1/gallery-6.jpg" data-fancybox="gallery">
                                      <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-1.jpg" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-3  col-md-3 col-sm-3">
                                  <div className="review-gallery">
                                    <a href="/assets/img/gallery/gallery1/gallery-5.jpg" data-fancybox="gallery">
                                      <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-2.jpg" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-3  col-md-3 col-sm-3">
                                  <div className="review-gallery">
                                    <a href="/assets/img/gallery/gallery1/gallery-8.jpg" data-fancybox="gallery">
                                      <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-3.jpg" />
                                    </a>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3">
                                  <div className="review-gallery">
                                    <a href="/assets/img/gallery/gallery1/gallery-9.jpg" data-fancybox="gallery">
                                      <img className="img-fluid" alt="Image" src="/assets/img/gallery/galleryimg-9.jpg" />
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="reply-box ">
                                <p>Was This Review...? <a href="#" className="thumbsup"><i className="feather-thumbs-up" /> Like </a>
                                  <a href="#" className="thumbsdown"><i className="feather-thumbs-down" /> Dislike </a>
                                </p>
                                <a href="#" className="replylink"><i className="feather-corner-up-left" /> Reply</a>
                              </div>
                            </div>
                          </li>
                          <li className="review-box">
                            <div className="review-profile">
                              <div className="review-img">
                                <img src="/assets/img/profiles/avatar-02.jpg" className="img-fluid" alt="img" />
                              </div>
                            </div>
                            <div className="review-details">
                              <h6>Dev</h6>
                              <div className="rating">
                                <div className="rating-star">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-overall" />
                                </div>
                                <div><i className="fa-sharp fa-solid fa-calendar-days" /> 4 months ago</div>
                                <div>by: Demo Test</div>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                              </p>
                            </div>
                          </li>
                          <li className="review-box">
                            <div className="review-profile">
                              <div className="review-img">
                                <img src="/assets/img/profiles/avatar-01.jpg" className="img-fluid" alt="img" />
                              </div>
                            </div>
                            <div className="review-details">
                              <h6>Johnson</h6>
                              <div className="rating">
                                <div className="rating-star">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fa-regular fa-star rating-overall" />
                                </div>
                                <div><i className="fa-sharp fa-solid fa-calendar-days" /> 4 months ago</div>
                                <div>by: Demo Test</div>
                              </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                              </p>
                              <div className="reply-box ">
                                <p>Was This Review...? <a href="#" className="thumbsup"><i className="feather-thumbs-up" /> Like </a>
                                  <a href="#" className="thumbsdown"><i className="feather-thumbs-down" /> Dislike </a>
                                </p>
                                <a href="#" className="replylink"><i className="feather-corner-up-left" /> Reply</a>
                              </div>
                            </div>
                          </li>
                          <li className="review-box feedbackbox mb-0">
                            <div className="review-details">
                              <h6>Leave feedback about this</h6>
                            </div>
                            <div className="card-body">
                              <form className>
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="Title" />
                                </div>
                                <div className="namefield">
                                  <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name*" required />
                                  </div>
                                  <div className="form-group me-0">
                                    <input type="email" className="form-control" placeholder="Email*" required />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <textarea rows={4} className="form-control" placeholder="Write a Review*" required defaultValue={""} />
                                </div>
                                <div className="reviewbox-rating">
                                  <p><span> Rating</span>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                  </p>
                                </div>
                                <div className="submit-section">
                                  <button className="btn btn-primary submit-btn" type="submit"> Submit Review</button>
                                </div>
                              </form>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 theiaStickySidebar">
                  <div className="rightsidebar">
                    <div className="card">
                      <h4><img src="/assets/img/details-icon.svg" alt="details-icon" /> Details</h4>
                      <ul>
                        <li>Contract <span>For Rent</span></li>
                        <li>Location <span>New York, USA</span></li>
                        <li>Year Built <span>1988</span></li>
                        <li>Rooms <span>3</span></li>
                        <li>Beds <span>4</span></li>
                        <li>Baths<span>8</span></li>
                        <li>Gadgets <span>6</span></li>
                        <li>Home Area <span>30sqft</span></li>
                        <li>Lot Dimensions <span>30*30*20 ft</span></li>
                        <li className="p-0">Lot Area <span>50 ft</span></li>
                      </ul>
                    </div>
                    <div className="card">
                      <h4><img src="/assets/img/breifcase.svg" alt="" /> Business Info</h4>
                      <div className="map-details">
                        <div className="map-frame">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2238528387797!2d-122.41637708468208!3d37.78479337975754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090475dcdc3%3A0x417fdbbd16e076ed!2s484%20Ellis%20St%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e0!3m2!1sen!2sin!4v1669879954211!5m2!1sen!2sin" width={200} height={160} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                        <ul className="info-list">
                          <li><i className="feather-map-pin" /> 484, Ellis st, San Fransisco,<br />CS 94102, United States</li>
                          <li><i className="feather-phone-call" /> + 62 8245 9875</li>
                          <li><i className="feather-mail" /> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ff8c8a8f8f908d8bbf93968c8b9a9ad19c9092">[email&nbsp;protected]</a></li>
                          <li><img src="/assets/img/website.svg" alt="website" /> www.listee.com</li>
                          <li className="socialicons pb-0">
                            <a href="#" target="_blank"><i className="fab fa-facebook-f" /> </a>
                            <a href="#" target="_blank"><i className="fab fa-twitter" /></a>
                            <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                            <a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card">
                      <h4><img src="/assets/img/statistic-icon.svg" alt="location" /> Statisfic</h4>
                      <ul className="statistics-list">
                        <li>
                          <div className="statistic-details"><span className="icons"><i className="fa-regular fa-eye" /></span> Views </div>
                          <span className="text-end"> 453563</span>
                        </li>
                        <li>
                          <div className="statistic-details"><span className="icons"><i className="feather-star" /></span> Ratings </div>
                          <span className="text-end"> 153</span>
                        </li>
                        <li>
                          <div className="statistic-details"><span className="icons"><i className="feather-heart" /></span> Favuorites </div>
                          <span className="text-end"> 123</span>
                        </li>
                        <li className="mb-0">
                          <div className="statistic-details"><span className="icons"><i className="feather-share-2" /></span> Shares </div>
                          <span className="text-end"> 50</span>
                        </li>
                      </ul>
                    </div>
                    <div className="card">
                      <h4> <i className="feather-user" /> Author</h4>
                      <div className="sidebarauthor-details align-items-center">
                        <div className="sideauthor-img">
                          <img src="/assets/img/profiles/avatar-12.jpg" alt="author" />
                        </div>
                        <div className="sideauthor-info">
                          <p className="authorname">Johnson</p>
                          <p>Member since Nov 24, 2017</p>
                        </div>
                      </div>
                    </div>
                    <div className="card mb-0">
                      <h4> <i className="feather-phone-call" /> Contact Business</h4>
                      <form className="contactbusinessform">
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                          <input type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                          <textarea rows={6} className="form-control" placeholder="Message" defaultValue={""} />
                        </div>
                        <div className="submit-section">
                          <button className="btn btn-primary submit-btn" type="submit">Send Message</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      </div>
  )
}

export default ServiceDetail