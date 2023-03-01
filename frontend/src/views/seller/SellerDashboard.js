import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import SellerDashboardHeader from '../../components/SellerDashboardHeader'
function SellterDashboard() {
  return (
    <div>
      <Header />
      <div className="breadcrumb-bar">
            <div className="container">
               <div className="row align-items-center text-center">
                  <div className="col-md-12 col-12">
                     <h2 className="breadcrumb-title">Dashboard</h2>
                     <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                           <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
      </div>
      <div className="dashboard-content">
        <div className="container">
           <SellerDashboardHeader />
            <div className="dashboard-details">
              <div className="row">
                  <div className="col-lg-3 col-md-3">
                    <div className="card dash-cards">
                        <div className="card-body">
                          <div className="dash-top-content">
                              <div className="dashcard-img">
                                <img src="assets/img/icons/verified.svg" className="img-fluid" alt="" />
                              </div>
                          </div>
                          <div className="dash-widget-info">
                              <h6>Active Listing</h6>
                              <h3 className="counter">500</h3>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="card dash-cards">
                        <div className="card-body">
                          <div className="dash-top-content">
                              <div className="dashcard-img">
                                <img src="assets/img/icons/rating.svg" className="img-fluid" alt=""/>
                              </div>
                          </div>
                          <div className="dash-widget-info">
                              <h6>Total Reviews</h6>
                              <h3>15230</h3>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="card dash-cards">
                        <div className="card-body">
                          <div className="dash-top-content">
                              <div className="dashcard-img">
                                <img src="assets/img/icons/chat.svg" className="img-fluid" alt=""/>
                              </div>
                          </div>
                          <div className="dash-widget-info">
                              <h6>Messages</h6>
                              <h3>15</h3>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="card dash-cards">
                        <div className="card-body">
                          <div className="dash-top-content">
                              <div className="dashcard-img">
                                <img src="assets/img/icons/bookmark.svg" className="img-fluid" alt=""/>
                              </div>
                          </div>
                          <div className="dash-widget-info">
                              <h6>Bookmark</h6>
                              <h3>30</h3>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div className="row dashboard-info">
                  <div className="col-lg-6 d-flex">
                    <div className="card dash-cards w-100">
                        <div className="card-header">
                          <h4>Page Views</h4>
                          <div className="card-dropdown">
                              <ul>
                                <li className="nav-item dropdown has-arrow logged-item">
                                    <a href="#" className="dropdown-toggle pageviews-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>This week</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="javascript:void();">Next Week</a>
                                      <a className="dropdown-item" href="javascript:void()">Last Month</a>
                                      <a className="dropdown-item" href="javascript:void()">Next Month</a>
                                    </div>
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <div id="review-chart"></div>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex">
                    <div className="card dash-cards w-100">
                        <div className="card-header">
                          <h4>Visitor Review</h4>
                          <div className="card-dropdown">
                              <ul>
                                <li className="nav-item dropdown has-arrow logged-item">
                                    <a href="#" className="dropdown-toggle pageviews-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>All Listing</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                      <a className="dropdown-item" href="javascript:void(0)">Next Week</a>
                                      <a className="dropdown-item" href="javascript:void(0)">Last Month</a>
                                      <a className="dropdown-item" href="javascript:void(0)">Next Month</a>
                                    </div>
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div className="card-body">
                          <ul className="review-list">
                              <li className="review-box">
                                <div className="review-profile">
                                    <div className="review-img">
                                      <img src="assets/img/profiles/avatar-11.jpg" className="img-fluid" alt="img"/>
                                    </div>
                                </div>
                                <div className="review-details">
                                    <h6>Joseph</h6>
                                    <div className="rating">
                                      <div className="rating-star">
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                      </div>
                                      <div><i className="fa-sharp fa-solid fa-calendar-days"></i> 4 months ago</div>
                                      <div>by: Demo Test</div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.</p>
                                </div>
                              </li>
                              <li className="review-box">
                                <div className="review-profile">
                                    <div className="review-img">
                                      <img src="assets/img/profiles/avatar-01.jpg" className="img-fluid" alt="img" />
                                    </div>
                                </div>
                                <div className="review-details">
                                    <h6>Dev</h6>
                                    <div className="rating">
                                      <div className="rating-star">
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                          <i className="fas fa-star filled"></i>
                                      </div>
                                      <div><i className="fa-sharp fa-solid fa-calendar-days"></i> 4 months ago</div>
                                      <div>by: Demo Test</div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy.</p>
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
      <Footer />

    </div>
  )
}

export default SellterDashboard