import React from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import {useState, useEffect }  from 'react'

import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode';
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api';


function ServicesListing() {
    const [service, setService] = useState([])
    const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'})
    
    useEffect(() => {
        try {
          axios.get(baseUrl + '/service/').then((res) => {
            setService(res.data)
          })
        } catch (error) {
          console.log(error);
        }
      }, [])
  return (
    <div>
        <Header />
        <div class="breadcrumb-bar">
            <div class="container">
               <div class="row align-items-center text-center">
                  <div class="col-md-12 col-12">
                     <h2 class="breadcrumb-title">All Services</h2>
                     <nav aria-label="breadcrumb" class="page-breadcrumb">
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         <div class="dashboard-content">
            <div class="container">
               <div class="bookmarks-content grid-view featured-slider">
                  <div class="row">
                    {service.map((service, index) => 
                     <div class="col-lg-4 col-md-4 col-sm-6 ">
                        <div class="card aos aos-init aos-animate" data-aos="fade-up">
                           <div class="blog-widget">
                              <div class="blog-img">
                                 <Link to={"/service-detail/" + service.id}>
                                 <img src={service.image} class="img-fluid" alt="blog-img" style={{width:"100%", height:"200px", objectFit:"cover"}} />
                                 </Link>
                                 <div class="fav-item">
                                    <span class="Featured-text">Featured</span>
                                    <a href="javascript:void(0)" class="fav-icon ">
                                       <i class="fas fa-heart"></i>
                                    </a>
                                 </div>
                              </div>
                              <div class="bloglist-content">
                                 <div class="card-body">
                                    <div class="blogfeaturelink">
                                       <div class="grid-author">
                                          <img src="assets/img/profiles/avatar-02.jpg" alt="author" />
                                       </div>
                                       <div class="blog-features">
                                          <a href="javascript:void(0)"><span> <i class="fa-regular fa-circle-stop"></i> Vehicles</span></a>
                                       </div>
                                       <div class="blog-author text-end">
                                          <span> <i class="fas fa-eye"></i>4000</span>
                                       </div>
                                    </div>
                                    <h6><Link to={"/service-detail/" + service.id}>{service.title}</Link></h6>
                                    <div class="blog-location-details d-block">
                                       <div class="location-info">
                                          <i class="fas fa-location"></i> <small>{service.address}</small>
                                       </div>
                                       {/* <div class="location-info">
                                          <i class="fa-solid fa-calendar-days"></i> {date.format(service.date)}
                                       </div> */}
                                    </div>
                                    <div class="amount-details">
                                       <div class="amount">
                                          <span class="validrate">${service.price}</span>
                                          {/* <span>$450</span> */}
                                       </div>
                                       <div class="ratings">
                                          <span>4.7</span> (50)
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                    )}
                     
                     <div class="blog-pagination">
                        <nav>
                           <ul class="pagination">
                              <li class="page-item previtem">
                                 <a class="page-link" href="#"><i class="fas fa-regular fa-arrow-left"></i> Prev</a>
                              </li>
                              <li class="justify-content-center pagination-center">
                                 <div class="pagelink">
                                    <ul>
                                       <li class="page-item">
                                          <a class="page-link" href="#">1</a>
                                       </li>
                                       <li class="page-item active">
                                          <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
                                       </li>
                                       <li class="page-item">
                                          <a class="page-link" href="#">3</a>
                                       </li>
                                       <li class="page-item">
                                          <a class="page-link" href="#">...</a>
                                       </li>
                                       <li class="page-item">
                                          <a class="page-link" href="#">14</a>
                                       </li>
                                    </ul>
                                 </div>
                              </li>
                              <li class="page-item nextlink">
                                 <a class="page-link" href="#">Next <i class="fas fa-regular fa-arrow-right"></i></a>
                              </li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
    </div>
  )
}

export default ServicesListing