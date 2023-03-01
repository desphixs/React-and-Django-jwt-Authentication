import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SellerDashboardHeader from '../../components/SellerDashboardHeader'
import { Link } from 'react-router-dom'
import {useState, useEffect }  from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api';

function MyServices() {
  const [service, setService] = useState([])
  const token = localStorage.getItem('authTokens');
  const decoded = jwtDecode(token);
  const user_id = decoded.user_id;


  useEffect(() => {
    try {
      axios.get(baseUrl + '/my-services/' + user_id + '/').then((res) => {
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
                     <h2 class="breadcrumb-title">My Listing</h2>
                     <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                           <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                           <li class="breadcrumb-item active" aria-current="page">My Listing</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
      </div>
      <div class="dashboard-content">
        <div class="container">
            <SellerDashboardHeader />
            <div class="dash-listingcontent dashboard-info">
              <div class="dash-cards card">
                  <div class="card-header">
                    <h4>My Listings</h4>
                    <a class="nav-link header-login add-listing" href="add-listing.html"><i class="fa-solid fa-plus"></i> Add Listing</a>
                  </div>
                  <div class="card-body">
                    <div class="listing-search">
                        <div class="filter-content form-group">
                          <div class="group-img">
                              <input type="text" class="form-control" placeholder="Search..." />
                              <i class="feather-search"></i>
                          </div>
                        </div>
                        <div class="sorting-div">
                          <div class="sortbyset">
                              <span class="sortbytitle">Sort by</span>
                              <div class="sorting-select">
                                <select class="form-control select">
                                    <option>Newest</option>
                                    <option>Newest</option>
                                    <option>Oldest</option>
                                </select>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="listing-table datatable" id="listdata-table">
                          <thead>
                              <tr>
                                <th class="no-sort">Image</th>
                                <th class="no-sort">Details</th>
                                <th>Status</th>
                                <th class="no-sort">Views</th>
                                <th class="no-sort">Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {service.map((service, index) => 
                              <tr key={index}>
                                <td>
                                    <div class="listingtable-img"> <a href="service-details.html"><img class="img-fluid avatar-img" src={service.image} alt={service.title} /></a></div>
                                </td>
                                <td>
                                    <h6><a href="service-details.html">{service.title}</a></h6>
                                    <div class="listingtable-rate"><a href="javascript:void(0)" class="cat-icon"><i class="fa-regular fa-circle-stop"></i> {service.category.title}</a> <span class="discount-amt">${service.price.toLocaleString()}</span><span class="fixed-amt">$40000</span></div>
                                    <p>{service.description}</p>
                                </td>
                                <td><span class="status-text">{service.status.charAt(0).toUpperCase()}{service.status.slice(1)}</span></td>
                                <td><span class="views-count">1523</span></td>
                                <td>
                                    <div class="action">
                                      <a href="javascript:void(0)" class="action-btn btn-view"><i class="fas fa-eye"></i></a>
                                      <a href="javascript:void(0)" class="action-btn btn-edit"><i class="fas fa-edit"></i></a>
                                      <a href="javascript:void(0)" class="action-btn btn-trash"><i class="fas fa-trash"></i></a>
                                    </div>
                                </td>
                              </tr>
                             )}
                          </tbody>
                        </table>
                    </div>
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
      </div>
      <Footer />
    </div>
  )
}

export default MyServices