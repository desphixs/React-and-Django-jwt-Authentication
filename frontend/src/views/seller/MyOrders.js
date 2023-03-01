import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SellerDashboardHeader from '../../components/SellerDashboardHeader'
import { Link } from 'react-router-dom'
import {useState, useEffect }  from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios'
const swal = require('sweetalert2')

const baseUrl = 'http://127.0.0.1:8000/api';
function MyOrders() {

    const [orders, setOrders] = useState([])
    const [activeOrders, setActiveOrders] = useState([])
    const [cancelledOrders, setCancelledOrders] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])

    const token = localStorage.getItem('authTokens');
    const decoded = jwtDecode(token);
    const user_id = decoded.user_id;

    useEffect(() => {
        try {
            axios.get(baseUrl + '/my-order-list/' + user_id + '/').then((res) => {
                setOrders(res.data)
                console.log(orders);
            })
        } catch (error) {
            
        }
    }, [])

    // Get Active ORders
    useEffect(() => {
        try {
            axios.get(baseUrl + '/my-active-order-list/' + user_id + '/').then((res) => {
                setActiveOrders(res.data)
                console.log(activeOrders);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    // Get Cancelled ORders
    useEffect(() => {
        try {
            axios.get(baseUrl + '/my-cancelled-order-list/' + user_id + '/').then((res) => {
                setCancelledOrders(res.data)
                console.log(cancelledOrders);
            })
        } catch (error) {
            
        }
    }, [])

    // Get completed ORders
    useEffect(() => {
        try {
            axios.get(baseUrl + '/my-completed-order-list/' + user_id + '/').then((res) => {
                setCompletedOrders(res.data)
                console.log(completedOrders);
            })
        } catch (error) {
            
        }
    }, [])

    const handleAccept = (order_id) => {
        console.log(order_id);
        axios.get(baseUrl + '/accept-order/' + order_id + '/').then((res) => {
            console.log(res.data);
            try {
                axios.get(baseUrl + '/my-order-list/' + user_id + '/').then((res) => {
                    setOrders(res.data)
                    console.log(orders);
                })
            } catch (error) {
                
            }

            try {
                axios.get(baseUrl + '/my-active-order-list/' + user_id + '/').then((res) => {
                    setActiveOrders(res.data)
                    console.log(activeOrders);
                })
            } catch (error) {
                console.log(error);
            }
        })
        swal.fire({
            title: "Order Accepted.",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'bottom-right',
            timerPRogressBase: true,
            showConfirmButton: false,
        })
    }

    const handleReject = (order_id) => {
        console.log(order_id);
        axios.get(baseUrl + '/reject-order/' + order_id + '/').then((res) => {
            console.log(res.data);
            try {
                axios.get(baseUrl + '/my-order-list/' + user_id + '/').then((res) => {
                    setOrders(res.data)
                    console.log(orders);
                })
            } catch (error) {
                
            }

            try {
                axios.get(baseUrl + '/my-cancelled-order-list/' + user_id + '/').then((res) => {
                    setCancelledOrders(res.data)
                    console.log(cancelledOrders);
                })
            } catch (error) {
                
            }
        })
        swal.fire({
            title: "Order Rejected.",
            icon: "danger",
            toast: true,
            timer: 6000,
            position: 'bottom-right',
            timerPRogressBase: true,
            showConfirmButton: false,
        })
    }
   
  return (
   <>
     <Header />
    <div>
        <div class="breadcrumb-bar">
            <div class="container">
                <div class="row align-items-center text-center">
                    <div class="col-md-12 col-12">
                        <h2 class="breadcrumb-title">Reviews</h2>
                        <nav aria-label="breadcrumb" class="page-breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Reviews</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


        <div class="dashboard-content">
            <div class="container">
                <div class="">
                <SellerDashboardHeader />
                </div>
                <div class="row dashboard-info reviewpage-content">
                    <div class="col-lg-6 col-md-12 d-flex ">
                        <div class="card dash-cards">

                            <div class="card-header">
                                <h4 className='text-warning'>Pending Orders</h4>
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
                                    {orders.map((order, index) => 
                                        <li class="review-box" key={index}>
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
                                                <button onClick={() => handleAccept(order.id)} className='btn btn-success ms-2 mt-2' name='accept'>Accept</button>
                                                <button onClick={() => handleReject(order.id)} className='btn btn-dandger ms-2 mt-2' style={{background:"red", color:"#fff"}}>Reject</button>
                                            </div>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>
                    </div>
                {/* Second Col */}
                    <div class="col-lg-6 d-flex">
                    <div class="card dash-cards">
                    <div class="card-header">
                    <h4>Active Orders</h4>
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
                    {activeOrders.map((order, index) => 
                        <li class="review-box" key={index}>
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
                                <button className='btn btn-primary ms-2 mt-2' name='accept'>View Detail</button>
                                {/* <button onClick={() => handleReject(order.id)} className='btn btn-dandger ms-2 mt-2' style={{background:"red", color:"#fff"}}>Reject</button> */}
                            </div>
                        </li>
                    )}
                    
                    </ul>
                    </div>
                    </div>
                    </div>
                </div>

                <div class="row dashboard-info reviewpage-content mt-3">
                    <div class="col-lg-6 col-md-12 d-flex">
                        <div class="card dash-cards">

                            <div class="card-header">
                                <h4 className='text-success'>Completed Orders</h4>
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
                                    {completedOrders.map((order, index) => 
                                        <li class="review-box" key={index}>
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
                                                <button onClick={() => handleAccept(order.id)} className='btn btn-success ms-2 mt-2' name='accept'>Accept</button>
                                                <button onClick={() => handleReject(order.id)} className='btn btn-dandger ms-2 mt-2' style={{background:"red", color:"#fff"}}>Reject</button>
                                            </div>
                                        </li>
                                    )}

                                </ul>
                            </div>
                        </div>
                    </div>
                {/* Second Col */}
                    <div class="col-lg-6 d-flex">
                    <div class="card dash-cards">
                    <div class="card-header">
                    <h4 className='text-danger'>Cancelled Orders</h4>
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
                    {cancelledOrders.map((order, index) => 
                        <li class="review-box" key={index}>
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
                                <button className='btn btn-primary ms-2 mt-2' name='accept'>View Detail</button>
                                {/* <button onClick={() => handleReject(order.id)} className='btn btn-dandger ms-2 mt-2' style={{background:"red", color:"#fff"}}>Reject</button> */}
                            </div>
                        </li>
                    )}
                    
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

export default MyOrders