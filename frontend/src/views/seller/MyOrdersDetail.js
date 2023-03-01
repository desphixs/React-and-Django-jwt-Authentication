import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SellerDashboardHeader from '../../components/SellerDashboardHeader'
import { Link, useParams } from 'react-router-dom'
import {useState, useEffect }  from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios'
const swal = require('sweetalert2')

const baseUrl = 'http://127.0.0.1:8000/api';
function MyOrdersDetail() {

    const [order, setOrders] = useState([])
    const [acceptOrder, setAcceptOrder] = useState([])

    const token = localStorage.getItem('authTokens');
    const decoded = jwtDecode(token);
    const user_id = decoded.user_id;

    const {order_id} = useParams()

    useEffect(() => {
        try {
            axios.get(baseUrl + '/my-order-detail/' + user_id + '/' + order_id + '/').then((res) => {
                setOrders(res.data)
                console.log(order);
            })
        } catch (error) {
            
        }
    }, [])

   
  return (
   <>
     <Header />
    <div>
        


        <div class="dashboard-content">
            <div class="container">
                <div class="">
                <SellerDashboardHeader />
                </div>
                <div class="row dashboard-info reviewpage-content">
                    <div class="col-lg-6 col-md-12 d-flex">
                        <div class="card dash-cards">

                            <div class="card-header">
                                <h4>Visitor Review</h4>
                                <div class="card-dropdown">
                                    <ul>
                                        <li class="nav-item dropdown has-arrow logged-item">
                                            <a href="#" class="dropdown-toggle pageviews-link" data-bs-toggle="dropdown" aria-expanded="false">
                                                <span>All Listing</span>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-end">
                                            <a class="dropdown-item" href="javascript:void(0)">Next Week</a>
                                            <a class="dropdown-item" href="javascript:void(0)">Last Month</a>
                                            <a class="dropdown-item" href="javascript:void(0)">Next Month</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="review-list">
                                    {/* Single */}
                                        {/* <li class="review-box">
                                            <div class="review-profile">
                                                <div class="review-img">
                                                    <img src={order.service.image} style={{width:"100px", height:"100px", objectFit:"cover"}} class="img-fluid" alt="img"/>
                                                </div>
                                            </div>
                                            <div class="review-details">
                                                <h6>{order.service.title}</h6>
                                                <div class="rating">
                                                    <div><i class="fa-sharp fs-4 text-danger fa-solid fa-bell"></i> Status: {order.status}</div>
                                                    <div><i class="fa-sharp fa-solid fa-calendar-days"></i>Ordered: {order.date}</div>
                                                </div>
                                                <p>Ordered By: <b>{order.buyer.username}</b></p>
                                                <p>Order Message: <b>{order.description}</b></p>
                                                <p>Amount: <b>${order.service.price}</b></p>
                                                <button className='btn btn-success ms-2 mt-2'>Accept</button>
                                                <button className='btn btn-dandger ms-2 mt-2' style={{background:"red", color:"#fff"}}>Reject</button>
                                            </div>
                                        </li> */}
                                        <li class="review-box">
                                            <div class="review-profile">
                                                <div class="review-img">
                                                    <img src="" style={{width:"100px", height:"100px", objectFit:"cover"}} class="img-fluid" alt="img"/>
                                                </div>
                                            </div>
                                            <div class="review-details">
                                                <h6>Title</h6>
                                                <div class="rating">
                                                    <div><i class="fa-sharp fs-4 text-danger fa-solid fa-bell"></i> Status: {order.status}</div>
                                                    <div><i class="fa-sharp fa-solid fa-calendar-days"></i>Ordered: {order.date}</div>
                                                </div>
                                                {/* <p>Ordered By: <b>{order.buyer.username}</b></p> */}
                                                <p>Order Message: <b>{order.description}</b></p>
                                                {/* <p>Amount: <b>${order.service}</b></p> */}
                                                <button className='btn btn-success ms-2 mt-2'>Accept</button>
                                                <button className='btn btn-dandger ms-2 mt-2' style={{background:"red", color:"#fff"}}>Reject</button>
                                            </div>
                                        </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                {/* Second Col */}
                    <div class="col-lg-6 d-flex">
                    <div class="card dash-cards">
                    <div class="card-header">
                    <h4>Your Review</h4>
                    <div class="card-dropdown">
                    <ul>
                    <li class="nav-item dropdown has-arrow logged-item">
                    <a href="#" class="dropdown-toggle pageviews-link" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>All Listing</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item" href="javascript:void(0)">Next Week</a>
                    <a class="dropdown-item" href="javascript:void(0)">Last Month</a>
                    <a class="dropdown-item" href="javascript:void(0)">Next Month</a>
                    </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                    <div class="card-body">
                    <ul class="review-list">
                    <li class="review-box">
                    <div class="review-profile">
                    <div class="review-img">
                    <img src="assets/img/profile-img.jpg" class="img-fluid" alt="img"/>
                    </div>
                    </div>
                    <div class="review-details">
                    <h6>John Doe</h6>
                    <div class="rating">
                    <div class="rating-star">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    </div>
                    <div><i class="fa-sharp fa-solid fa-calendar-days"></i> 4 months ago</div>
                    <div>by: John Doe</div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.</p>
                    <ul class="review-gallery">
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-1.jpg"/>
                    </li>
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-2.jpg"/>
                    </li>
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-3.jpg"/>
                    </li>
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-4.jpg"/>
                    </li>
                    </ul>
                    </div>
                    </li>
                    <li class="review-box">
                    <div class="review-profile">
                    <div class="review-img">
                    <img src="assets/img/profile-img.jpg" class="img-fluid" alt="img"/>
                    </div>
                    </div>
                    <div class="review-details">
                    <h6>John Doe</h6>
                    <div class="rating">
                    <div class="rating-star">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    </div> 
                    <div><i class="fa-sharp fa-solid fa-calendar-days"></i> 6 months ago</div>
                    <div>by: John Doe</div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.</p>
                    </div>
                    </li>
                    <li class="review-box">
                    <div class="review-profile">
                    <div class="review-img">
                    <img src="assets/img/profile-img.jpg" class="img-fluid" alt="img"/>
                    </div>
                    </div>
                    <div class="review-details">
                    <h6>John Doe</h6>
                    <div class="rating">
                    <div class="rating-star">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    </div>
                    <div><i class="fa-sharp fa-solid fa-calendar-days"></i> 11 months ago</div>
                    <div>by: John Doe</div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.</p>
                    <ul class="review-gallery">
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-1.jpg"/>
                    </li>
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-2.jpg"/>
                    </li>
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-3.jpg"/>
                    </li>
                    <li>
                    <img class="img-fluid" alt="Image" src="assets/img/gallery/review-4.jpg"/>
                    </li>
                    </ul>
                    </div>
                    </li>
                    </ul>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default MyOrdersDetail